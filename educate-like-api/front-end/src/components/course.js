class Course {
    constructor(title, sections) {
        this.title = title;
        console.log(this.title)
        this.sections = sections;
    }

    renderTitleList(){
        return `<li>${this.title.attributes.title}</li>`
    }
  }