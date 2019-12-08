class Course {
    
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;

        const store = '';
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
        
        card.style.border = "1px solid blue";
            

        card.onclick = function() {

            let collection= document.getElementsByClassName("checked")
            let collection2= document.getElementsByClassName("checked")
            for (var i = 0; i < collection.length; i++) {
                collection[i].classList.remove('checked')
                for (var j = collection2.length-1; j >= 0; j--) {
                    collection[j].classList.remove('checked')
                }
              }

            card.style.border = "1px solid black";
            let para = card.getElementsByTagName('p')[0].innerText;
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
            sectionElement.className = this.title + " hidden";
            sectionElement.appendChild(document.createTextNode(section.title));
            sectionElement.appendChild(document.createTextNode(section.content));
            document.getElementById("courses").appendChild(sectionElement);
        } 
//add unique titles validations  to api for divs to display correctly
    }
}