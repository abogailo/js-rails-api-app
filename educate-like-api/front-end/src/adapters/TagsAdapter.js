class TagsAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/tags'
    }

    getTags() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}