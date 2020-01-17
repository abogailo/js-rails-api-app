class Tag {

    contructor(name){
        this.name = name;
    }

    renderCourseTags(){
        const tagContainer = document.createElement('div')
        tagContainer.className = "tag-container"
        const tag = document.createElement('ul')
        tagContainer.appendChild(tag)
        tag.appendChild(document.createTextNode(this.title))
        document.getElementById("new-course-container").appendChild(tagContainer)
    }

    renderAllTags(){
        const tagContainer = document.createElement('div')
        tagContainer.className = "tag-container"
        const tag = document.createElement('ul')
        tagContainer.appendChild(tag)
        tag.appendChild(document.createTextNode(this.title))
        document.getElementById("new-course-container").appendChild(tagContainer)
    }
}