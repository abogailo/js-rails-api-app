class Courses {
      constructor() {
        this.courses = [];
        this.adapter = new CoursesAdapter();
        this.sectionAddition = document.getElementById('btnAdd');
        this.coursesContainer = document.getElementById('courses-container');
        this.courseSectionsContainer = document.getElementById('section-view');
        //set it to a random div just to load all the sections, they are all hidden at this point
        this.submitData = document.getElementById('form-submit');
        this.courseForm = document.getElementById('new-course-form');
        this.createForm = document.getElementById('create');
        this.removeCard = document.getElementById('card-wrapper');
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
      }

     /* determineIfElementMatches(element, selector) {
        return element.matches(selector);
      }
      //use a polyfill in case element.matches doesnt work.
      //https://developer.mozilla.org/en-US/docs/Web/API/Element/matches

      */

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
        console.log(toRemove);
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
        inputName.className = "add-sect-name"
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
        console.log("ya made it")
        let form = document.getElementById("new-course-form");
            if (form.classList.contains("call")){
              form.classList.remove("call")
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
            let addSectionName = element.getElementsByClassName("add-sect-name")[0].value
            let addSectionContent = element.getElementsByClassName("form-control")[0].value
            sections_array.push({
              title: addSectionName,
              content: addSectionContent
            })
            //TODO make better names, these names are terrible, maybe push to the front of array and add static section after to the front
          }
        }
        
        console.log(sections_array)
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
          this.adapter.createCourse(configObject).then(() => {
            this.fetchAndLoadCourses();
          })
      }

      removeData(toRemove){
        console.log("gots to be removed" + toRemove);

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
        this.adapter.removeCourse(configObject).then(() => {
          this.fetchAndLoadCourses();
        })
      }
      

      fetchAndLoadCourses(){
          this.adapter
          .getCourses()
          .then(courses => this.listCourses(courses))
          .then(() => {
             this.renderSections();
          })
          .then(() => {
             this.render();
          })
      }

      listCourses(courses){
        for (let course of courses){
          let sections = this.createSectionsArray(course.attributes.sections)
          this.courses.push(new Course(course.attributes.title, sections, course.id))
        }
      }

      createSectionsArray(sections){
        const sectionsArray = sections.map(section => ({title: section.title, content: section.content}))
        return sectionsArray
      } 
  
      render() {
         this.courses.map(course => course.renderCourseCards()).join('');
      }

      renderSections(){
        this.courseSectionsContainer.innerHTML = this.courses.map(course => course.renderSections()).join('')
        //join ('') to get rid of commas when rendering the html
      }

      renderTags(){

      }
    }
  