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
    
    async createCourse(value){
        const res = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ course })
        });
        return await res.json();
    }
}

//adapter = newCoursesAdapter()
//adapter.getCourses()