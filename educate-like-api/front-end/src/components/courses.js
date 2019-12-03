class Courses {
    constructor() {
      this.courses = [];
      this.adapter = new CoursesAdapter();
      this.fetchAndLoadCourses();
    }

    fetchAndLoadCourses(){
        this.adapter
        .getCourses()
        .then(courses => {
          console.log(courses)
            courses.forEach(course => this.courses.push(course))
            console.log(this.courses)
        })
        .then(() => {
          this.render();
        })
    }

    render() {
      const coursesContainer = document.getElementById('courses-container')
      coursesContainer.innerHTML = 'my courses here'
    }
  }