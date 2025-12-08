
// Learn Button Functionality

// Load Learn Button
const loadLearnBtn = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then (Response => Response.json())
    .then (data => DisplayLearnBtn(data.data)) ;
}
loadLearnBtn();

const DisplayLearnBtn = (btns) => {
    console.log(btns);
    const sectionbtn = document.getElementById("Learn");
    
    // Run an Loop 
    for(const btn of btns) {
        // console.log(btn);
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="lesson-${btn.level_no}" class="btn btn-soft btn-info text-[#422AD5] border-[#422AD5]"><img src="assets/fa-book-open.png" alt="book"> Lesson-${btn.level_no}</button>
        `
        // console.log(div);
        DisplayLearnCards(div);
         sectionbtn.append(div);

            document.getElementById(`lesson-${btn.level_no}`).addEventListener("click", function (){
            // console.log(`clicked-${btn.level_no}`);
            const showCards = document.getElementById("showCards");
            
            const createDiv = document.createElement("div");
            createDiv.innerHTML = `
                                <div class="bg-white rounded-lg p-1 ">
    <div class="text-center my-14">
        <h1 class="mt-2 mb-2">continues</h1>
        <h3 class="mt-2 mb-2">Meaning / Pronounciation</h3>
        <h3 class="mt-2 mb-10">Write Bangla</h3>
    </div>

    <!-- Icons  -->
    <div class="flex mx-12 justify-between items-center mb-14">
        <div>
            <button class="bg-[#c8dff4] px-2 py-1 rounded">
                <i class="fa-solid fa-circle-info"></i>
            </button>
        </div>

        <div>
            <button class="bg-[#c8dff4] px-2 py-1 rounded">
                <i class="fa-solid fa-circle-play"></i>
            </button>
        </div>
    </div>
</div>
            `
            showCards.append(createDiv);
        })
    }
    
}

const DisplayLearnCards = (BtnCardNo) => {
    // console.log(BtnCardNo);
    // const demo = document.getElementById(`lesson-1`);
    // console.log(demo);

}




// Learn scrollIntoView Functionality

const learnScroll = () => {
    document.getElementById("LearnId").addEventListener("click" , function (){
        document.getElementById("MainLearn").scrollIntoView({
            behavior: "smooth"
        });
    })
}
learnScroll();


// Accordion Functionality

const FAQScroll = () => {
    document.getElementById("questation").addEventListener("click", function () {
        document.getElementById("faqSection").scrollIntoView({
        behavior: "smooth"
    });
});

}
FAQScroll();


const demo = () => {
    fetch("https://openapi.programming-hero.com/api/level/1")
    .then (Response => Response.json())
    .then (data => console.log(data.data)) ;
}
demo();
