class Course {
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;
    }

    renderTitleList(){
        return `<li>${this.title}${this.sections}</li>`
    }
  }