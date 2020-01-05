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
      }

      addSection(){
        const section = document.getElementById('section-view');
        const sectionName = document.createElement('div');
        section.appendChild(sectionName);
        sectionName.id = "section-name";
        sectionName.className = "section-stuff"
        const labelName = document.createElement('label');
        sectionName.appendChild(labelName);
        labelName.for = "section-name";
        labelName.innerHTML = 'Section name ';
        const inputName = document.createElement('input');
        sectionName.appendChild(inputName);
        inputName.type = "text";
        inputName.name = "section-name";
        const sectionContent = document.createElement('div');
        section.appendChild(sectionContent);
        sectionContent.id = "section-content";
        sectionContent.className = "section-stuff"
        const labelContent = document.createElement('label');
        const addbreak = document.createElement('br');
        sectionContent.appendChild(labelContent);
        sectionContent.appendChild(addbreak);
        labelContent.for = "section-content";
        labelContent.innerHTML = 'Section Content ';
        const inputContent = document.createElement('input');
        sectionContent.appendChild(inputContent);
        inputContent.type = "text";
        inputContent.name = "section-content";
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
        console.log('ya made it here')
        let sections_array = [
          {
            title: sectionName,
            content: sectionContent
          },
          {
            title: "oh lort",
            content: "will this work"
          }
        ]

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
          this.adapter.createCourse(configObject)
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
          this.courses.push(new Course(course.attributes.title, sections))
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
    }
  