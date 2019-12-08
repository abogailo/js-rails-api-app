class Course {
    
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;
    }
    
    renderCourseCards(){
        const paragraphElement = document.createElement("ul");
        paragraphElement.appendChild(document.createTextNode(this.title));
        document.getElementById("new-course-container").appendChild(paragraphElement);
    }

    renderSections(){
        for(let section of this.sections){
            const sectionElement = document.createElement('div');
            sectionElement.id = this.title;
            sectionElement.className = "hidden";
            sectionElement.appendChild(document.createTextNode(section.title));
            sectionElement.appendChild(document.createTextNode(section.content));
            document.getElementById("courses").appendChild(sectionElement);
        } 
//add unique titles validations  to api for divs to display correctly
    }
}