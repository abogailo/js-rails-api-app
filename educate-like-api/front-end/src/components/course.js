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
        const card_remove = document.createElement('div');
        const materialCloseicon = document.createElement('i');
        card_remove.className = "card-remove";
        materialCloseicon.className = "material-icons";
        materialCloseicon.innerHTML = "delete_outline";
        card_remove.appendChild(materialCloseicon);
        paragraphElement.appendChild(document.createTextNode(this.title));
        course_card.appendChild(paragraphElement)
        course_card.appendChild(card_remove)
        card.appendChild(course_card)
        document.getElementById("new-course-container").appendChild(card);
        card.style.border = "1px solid white";

        card.onclick = function() {

            let collection = document.getElementsByClassName("checked")
            for (var j = collection.length-1; j >= 0; j--) {
                collection[j].classList.add("hidden")
            }

            let collection2 = document.getElementsByClassName("checked")
            for (var j = collection2.length-1; j >= 0; j--) {
                collection[j].classList.remove("checked")
            }
            
            let para = card.getElementsByTagName('p')[0].innerText;
            let cardCollection = document.getElementsByClassName("card")
            for (let e of cardCollection)
            {
                let currentCard = e.getElementsByTagName('p')[0].innerText;
                if (currentCard !== para){
                    e.style.border = "1px solid white";
                }
                else {
                    card.style.border = "1px solid #2e4ead";
                }
            }
                    
            let collectionOfNames = document.getElementsByClassName(para)
            for(let element of collectionOfNames){
                if(element.classList.contains("hidden")){
                    element.classList.remove("hidden")
                    element.classList.value += " checked"
                }
                else{
                    element.classList.value += " hidden"
                }
            }
        }
    }
 
    renderSections(){
        for(let section of this.sections){
            const sectionElement = document.createElement('div');
            sectionElement.id = "section-area"
            sectionElement.className = this.title + " hidden";
            const titleSection = document.createElement('div');
            titleSection.id = "section-title"
            titleSection.appendChild(document.createTextNode(section.title));
            sectionElement.appendChild(titleSection);
            const contentSection = document.createElement('div');
            contentSection.id = "section-content"
            contentSection.appendChild(document.createTextNode(section.content));
            sectionElement.appendChild(contentSection);
            document.getElementById("courses").appendChild(sectionElement);
        } 
//add unique titles validations  to api for divs to display correctly
    }
}