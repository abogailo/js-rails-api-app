class TagsAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/tags'
    }

    async getTags() {
        try {
             const res = await fetch(this.baseUrl);
             const out = await res.json();
             return out.data;
         }
         catch (err) {
             throw err;
         }
         
     }
     //threading
     async createCourse(configObject){
         const res = await fetch(this.baseUrl, configObject);
         return await res.json();
     }
}