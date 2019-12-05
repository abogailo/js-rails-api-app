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
          this.courseForm.addEventListener('submit', this.createCourse.bind(this))
      }

      createCourse(e){
        e.preventDefault()
        const value = this.newCourseSection.value

        this.adapter.createCourse(value).then(course => {
          console.log(course)
        })
        console.log('course is being created')
      }
  
      fetchAndLoadCourses(){
          this.adapter
          .getCourses()
          .then(courses => {
              courses.forEach(c => this.courses.push(new Course(c)))//push new course instance into array 
              console.log(this.courses) //get all recipes from here and parse each one
          })
          .then(() => {
            this.render();
          })
      }
  
      render() {
    console.log(this.courses)
        this.coursesContainer.innerHTML = this.courses.map(course => course.renderTitleList()).join('')
      }
    }
  