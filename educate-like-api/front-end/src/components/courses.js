class Courses {
      constructor() {
        this.courses = [];
        this.adapter = new CoursesAdapter();
        this.fetchAndLoadCourses();
        this.initBindingsAndEventListeners();
      }
  
      initBindingsAndEventListeners(){
          this.coursesContainer = document.getElementById('courses-container')
          this.newCourseSection = document.getElementById('new-course-section')
          this.courseForm = document.getElementById('new-course-form')
      }

      fetchAndLoadCourses(){
          this.adapter
          .getCourses()
          .then(courses => this.createCourses(courses))
          .then(() => {
            this.render();
          })
      }

      createCourses(courses){
        for (let course of courses){
          let sections = this.createSectionsArray(course.attributes.sections)
          this.courses.push(new Course(course.attributes.title, sections))
        }
        console.log(this.courses)
        
      }

      createSectionsArray(sections){
        const sectionsArray = sections.map(section => ({title: section.title, content: section.content}))
        console.log(sectionsArray)
        return sectionsArray
         
      } 

      render() {
        this.coursesContainer.innerHTML = this.courses.map(course => course.renderTitleList()).join('')
      }
    }
  