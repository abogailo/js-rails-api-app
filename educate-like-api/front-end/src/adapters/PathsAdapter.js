class PathsAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/paths'
    }

    getPaths() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}