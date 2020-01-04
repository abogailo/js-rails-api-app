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
        const form = document.getElementById('section-view');
        const section = document.createElement('div');
        form.appendChild(section)
        section.className = "section-area";
        const nameSection = document.createElement('div');
        section.appendChild(nameSection)
        nameSection.className = "col-sm-12";
        const contentSection = document.createElement('div');
        section.appendChild(contentSection)
        contentSection.className = "col-sm-12";
        const inputBlockName = document.createElement('div');
        nameSection.appendChild(inputBlockName)
        inputBlockName.className = "input-block";
        const inputBlockSection = document.createElement('div');
        contentSection.appendChild(inputBlockSection)
        inputBlockSection.className = "input-block textarea";
        const labelSectionName = document.createElement('label')
        inputBlockName.appendChild(labelSectionName)
        labelSectionName.innerHTML = 'Section name '
        const labelSectionContent = document.createElement('label')
        inputBlockSection.appendChild(labelSectionContent)
        labelSectionContent.innerHTML = 'Section content '
        const inputSectionName = document.createElement('input')
        inputBlockName.appendChild(inputSectionName)
        inputSectionName.type = "text";
        inputSectionName.className = "form-control";
        inputSectionName.id = "ip2"
        const textSectionContent = document.createElement('textarea')
        inputBlockSection.appendChild(textSectionContent)
        textSectionContent.rows = "6"
        textSectionContent.placeholder = "Provide lesson here..."
        textSectionContent.className = "form-control";
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
        console.log('ya made it here')
        let sections_array = [
          {
            title: "cool cat",
            content: "really cool kitty cat"
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
             "title": "cat",
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
  