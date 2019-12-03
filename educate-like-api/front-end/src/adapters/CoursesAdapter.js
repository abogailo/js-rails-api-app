class CoursesAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/courses'
    }

    getCourses() {
        console.log("try this")
        return fetch(this.baseUrl).then(response => response.json()).then(json => json.data)
    }
}

//adapter = newCoursesAdapter()
//adapter.getCourses()