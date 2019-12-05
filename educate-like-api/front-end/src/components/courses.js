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
          //.then(courses => {
           //   courses.forEach(c => this.courses.push(new Course(c)))//push new course instance into array 
           //   console.log(this.courses) //get all recipes from here and parse each one
          //})
          .then(() => {
            this.render();
          })
      }

      createCourses(courses){
        for (let course of courses){
          this.courses.push(new Course(course.attributes.title))
        }
        console.log(this.courses)
        
      }
  
      render() {
        this.coursesContainer.innerHTML = this.courses.map(course => course.renderTitleList()).join('')
      }
    }
  