class Course {
    
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;
    }
    
    renderCourseCards(){
        const card = document.createElement('div');
        card.className = "card";
        const course_card = document.createElement('div');
        course_card.className = "course_card";
        const paragraphElement = document.createElement("p");

        paragraphElement.appendChild(document.createTextNode(this.title));
        course_card.appendChild(paragraphElement)
        card.appendChild(course_card)
        document.getElementById("new-course-container").appendChild(card);
        
        card.onclick = function() {
            card.style.border = "1px solid black";
            let cool = card.getElementsByTagName('p')[0].innerText;
                console.log(cool)
                let now = document.getElementById(cool)
                console.log(now)
                if (now.classList.contains("hidden")) {
                    now.classList.remove("hidden");
                  } 
          }

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