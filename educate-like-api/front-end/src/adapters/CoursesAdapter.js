class CoursesAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/courses'
    }

    getCourses() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}

//adapter = newCoursesAdapter()
//adapter.getCourses()