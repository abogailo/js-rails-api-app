class Course {

    
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;
    }
    
    renderTitleList(){
        console.log(this.title)
        for(let section of this.sections){
            console.log(section.title)
            console.log(section.content)
       }

        const paragraphElement = document.createElement("ul");
        const linkElement = document.createElement("p");

        paragraphElement.appendChild(document.createTextNode(this.title));
        
        for(let section of this.sections){
            console.log(section.title)
            linkElement.appendChild(document.createTextNode(section.title));
            linkElement.appendChild(document.createTextNode(section.content));
            console.log(section.content)
        }
        document.getElementById("new-course-container").appendChild(paragraphElement);
        document.getElementById("courses").appendChild(linkElement);
    }

  }