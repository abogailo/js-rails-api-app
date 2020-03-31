class Courses {
      constructor() {
        this.courses = [];
        this.adapter = new CoursesAdapter();
        this.sectionAddition = document.getElementById('btnAdd');
        this.coursesContainer = document.getElementById('courses-container');
        this.courseSectionsContainer = document.getElementById('section-view');
        this.sortedCourseContainer = document.getElementById('sorted-course');
        //set it to a random div just to load all the sections, they are all hidden at this point
        this.submitData = document.getElementById('form-submit');
        this.courseForm = document.getElementById('new-course-form');
        this.createForm = document.getElementById('create');
        this.removeCard = document.getElementById('card-wrapper');
        this.sortButton = document.getElementById('btnSort');
        this.bindingsAndEventListeners();
        this.fetchAndLoadCourses();
      }

      bindingsAndEventListeners(){
        this.sectionAddition.addEventListener("click", function() {
          event.preventDefault();
          this.addSection();
        }.bind(this))
        this.createForm.addEventListener("click", function() {
          this.showForm();
        }.bind(this))
        this.submitData.addEventListener("click", function() {
          event.preventDefault();
          this.sendData();
        }.bind(this))
        this.removeCard.addEventListener('click', function (e) {
          if (this.elementMatch(e.target, '.card-remove, .card-remove i')) {
            this.removeItem(e);
          }
        }.bind(this));
        this.sortButton.addEventListener('click', function() {
          this.sortCourses();
        }.bind(this));
      }

     /* determineIfElementMatches(element, selector) {
        return element.matches(selector);
      }
      //use a polyfill in case element.matches doesnt work.
      //https://developer.mozilla.org/en-US/docs/Web/API/Element/matches

      */
     sortCourses(){
      
      fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(courses => { 
        courses.data.sort(function(a, b) {
        var nameA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
        console.log(courses.data)
        this.sortedCourseContainer.innerHTML = courses.data.map(course => course.attributes.title).join(', ')
      })
     }


      elementMatch(element, selector){
        var p = Element.prototype;
        return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector).call(element, selector);
      }

      removeItem(e){
       const elementsParent = e.target.parentNode;
       const parentParent = elementsParent.parentNode;
       const para = parentParent.getElementsByClassName('card-paragraph')[0];
       const toRemove = para.id;
       const cardToRemove = parentParent.parentNode;

       cardToRemove.parentNode.removeChild(cardToRemove); //gets the cards parent to remove the child evidently deleting the card
       this.removeData(toRemove);
      }

      addSection(){
        const section = document.getElementById('section-view');
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = "section-wrapper";
        section.appendChild(sectionWrapper);
        const sectionName = document.createElement('div');
        sectionWrapper.appendChild(sectionName);
        sectionName.id = "add-section-name";
        sectionName.className = "section-stuff"
        const labelName = document.createElement('label');
        sectionName.appendChild(labelName);
        labelName.for = "add-section-name";
        labelName.innerHTML = 'Section name ';
        const inputName = document.createElement('input');
        sectionName.appendChild(inputName);
        inputName.type = "text";
        inputName.name = "add-section-name";
        inputName.className = "add-section-name"
        const sectionContent = document.createElement('div');
        sectionWrapper.appendChild(sectionContent);
        sectionContent.id = "add-section-content";
        sectionContent.className = "section-stuff"
        const labelContent = document.createElement('label');
        const addbreak = document.createElement('br');
        sectionContent.appendChild(labelContent);
        sectionContent.appendChild(addbreak);
        labelContent.for = "add-section-content";
        labelContent.innerHTML = 'Section Content ';
        const inputContent = document.createElement('input');
        sectionContent.appendChild(inputContent);
        inputContent.type = "text";
        inputContent.name = "add-section-content";
        inputContent.placeholder = "Provide lesson here..."
        inputContent.className = "form-control"
      }

      showForm(){
        let form = document.getElementById("new-course-form");
            if (form.classList.contains("call")){
              form.classList.remove("call")
            } 
      }

      hideForm(){
        let form = document.getElementById("new-course-form");
          if (!form.classList.contains("call")){
            form.className += " call"
          } 
      }

      hideContainer(){
          var childNodes = document.getElementById('new-course-container').childNodes;
          for(var i=childNodes.length-1;i >= 0;i--){ //go backward through the nodes 
              var childNode = childNodes[i];
              if(childNode.className == 'card'){
                  childNode.parentNode.removeChild(childNode);
              }
          }
      }
 
      hideSection(){
        var childNodes = document.getElementById('courses').childNodes;
        for(var i=childNodes.length-1;i >= 0;i--){ //go backward through the nodes 
            var childNode = childNodes[i];
            if(childNode.id == 'section-area'){
                childNode.parentNode.removeChild(childNode);
            }
        }
      }

       //https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-4-communication-with-the-server/sending-data-with-fetch-lab
      sendData(){
        const form = document.forms['create-course'];
        const courseName = form.elements['course-name'].value;
        const sectionName = form.elements['section-name'].value;
        const sectionContent = form.elements['section-content'].value;
        let sections_array = []
        let collectionOfSections = document.getElementsByClassName("section-wrapper")
        
        sections_array.push({
          title: sectionName,
          content: sectionContent
        })
        
        if (collectionOfSections.length > 0) {
          for(let element of collectionOfSections){
            let addSectionName = element.getElementsByClassName("add-section-name")[0].value
            let addSectionContent = element.getElementsByClassName("form-control")[0].value
            sections_array.push({
              title: addSectionName,
              content: addSectionContent
          })
        }
      }
        
      const configObject = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "title": courseName,
            "sections_attributes": sections_array
          })
        };
        this.adapter.createCourse(configObject).then(function(json) {
          for(let course of this.courses){
            console.log(course)
          }
          console.log(this.courses)
          this.hideForm();
          this.hideContainer();
          this.hideSection();
          this.fetchAndLoadCourses();
        }.bind(this))
      }

      fetchAndLoadCourses(){
      console.log(this.courses)
        this.courses.length = 0; //clears the object that was previously created
        this.adapter
        .getCourses()
        .then(courses => this.listCourses(courses))
        .then(() => {
          this.renderSections();
        console.log(this.courses)
        })
        .then(() => {
          this.createCard();
        })
      }
  
      listCourses(courses){
        for (let course of courses){
          let sections = this.createSectionsArray(course.attributes.sections)
          this.courses.push(new Course(course.attributes.title, sections, course.id))
        }
      }

      removeData(toRemove){
        const configObject = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
           "id": toRemove
          })
        };
        this.adapter.removeCourse(configObject, toRemove).then(() => {
          this.hideContainer();
          this.hideSection();
          this.fetchAndLoadCourses();
        })
      }

      createSectionsArray(sections){
        const sectionsArray = sections.map(section => ({title: section.title, content: section.content}))
        return sectionsArray
      } 
  
      createCard() {
        console.log(this.courses)
    
        this.courses.map(course => course.renderCourseCard()).join('');
      }

      renderSections(){
        this.courseSectionsContainer.innerHTML = this.courses.map(course => course.renderSections()).join('')
        //join ('') to get rid of commas when rendering the html
      }
    }
  