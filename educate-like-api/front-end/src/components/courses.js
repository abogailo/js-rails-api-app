class Courses {
      constructor() {
        this.courses = [];
        this.adapter = new CoursesAdapter();
        this.sectionAddition = document.getElementById("btnAdd");
        this.coursesContainer = document.getElementById('courses-container')
        this.courseSectionsContainer = document.getElementById('new-course-section')
        this.courseForm = document.getElementById('new-course-form')    
        this.initBindingsAndEventListeners();
        this.fetchAndLoadCourses();
      }

      initBindingsAndEventListeners(){
        this.sectionAddition.addEventListener("click", function() {
          event.preventDefault();
          this.addSection();
        }.bind(this))
      }

      addSection(){
        const form = document.getElementById('new-course-form');
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

      fetchAndLoadCourses(){
          this.adapter
          .getCourses()
          .then(courses => this.createCourses(courses))
          .then(() => {
                      this.renderSections();
                    })
          .then(() => {
            this.render();
          })
      }

      createCourses(courses){
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
         this.courses.map(course => course.renderCourseCards())
      }

      renderSections(){
        this.courseSectionsContainer.innerHTML = this.courses.map(course => course.renderSections())
      }
    }
  