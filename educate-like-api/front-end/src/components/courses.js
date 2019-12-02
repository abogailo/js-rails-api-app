class Courses {
    constructor() {
      this.adapter = new CoursesAdapter();
      this.fetchAndLoadCourses()
    }

    fetchAndLoadCourses(){
        this.adapter.getCourses().then(courses => {
            console.log(courses)
        })
    }
  }