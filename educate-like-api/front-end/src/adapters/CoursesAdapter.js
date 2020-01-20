class CoursesAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/courses'
        this.removalUrl = 
        'http://localhost:3000/courses'
    }

    async getCourses() {
       try {
            const res = await fetch(this.baseUrl);
            const out = await res.json();
            return out.data;
        }
        catch (err) {
            throw err;
        }
        
    }
    
    async createCourse(configObject){
        const res = await fetch(this.baseUrl, configObject);
        return await res.json();
    }

    async removeCourse(configObject){
        const res = await fetch(this.removalUrl, configObject);
        return await res.json();
    }
}

//adapter = newCoursesAdapter()
//adapter.getCourses()