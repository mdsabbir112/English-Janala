
// Learn Button Functionality

// Load Learn Button
const loadLearnBtn = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then (Response => Response.json())
    .then (data => LearnBtn(data.data)) ;
}
loadLearnBtn();

const LearnBtn = (btns) => {
    // console.log(btns);
    const sectionbtn = document.getElementById("Learn");
    
    // Run an Loop 
    for(const btn of btns) {
        // console.log(btn);
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="btn btn-soft btn-info text-[#422AD5] border-[#422AD5]"><img src="assets/fa-book-open.png" alt="book"> Lesson-${btn.level_no}</button>
        `
         sectionbtn.append(div);
    }
    
}


// Accordion Functionality

const FAQ = () => {
    document.getElementById("questation").addEventListener("click", function () {
        document.getElementById("faqSection").scrollIntoView({
        behavior: "smooth"
    });
});

}
FAQ();


