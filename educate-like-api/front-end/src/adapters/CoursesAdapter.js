class CoursesAdapter {
    constructor() {
        this.baseUrl =
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

    async removeCourse(configObject, toRemove){
        const res = await fetch(this.baseUrl + "/" + toRemove, configObject);
        return await res.json();
    }
}
