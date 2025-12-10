
// Learn Button Functionality

// Load Learn Button
const loadLearnBtn = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then (Response => Response.json())
    .then (data => DisplayLearnBtn(data.data)) ;
}
loadLearnBtn();

const DisplayLearnBtn = (btns) => {
    // console.log(btns);
    const sectionbtn = document.getElementById("Learn");
    
    // Run an Loop 
    for(const btn of btns) {
        // console.log(btn);
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="lesson-${btn.level_no}" onclick="MakeLearnCardsURL(${btn.level_no})" class="btn btn-soft btn-info text-[#422AD5] border-[#422AD5]"><img src="assets/fa-book-open.png" alt="book"> Lesson-${btn.level_no}</button>
        ` 
        // console.log(div);
        // DisplayLearnCards(div);
         sectionbtn.append(div);

    }
}

const MakeLearnCardsURL = (BtnCardNo) => {
    // console.log(BtnCardNo);
    // Create a Dynamic URL 
    fetch(`https://openapi.programming-hero.com/api/level/${BtnCardNo}`)
    .then (Response => Response.json())  
    .then (data => DisplayLearnCards(data.data));

    CardDetails(BtnCardNo);
    

}
// MakeLearnCardsURL();

const DisplayLearnCards = (cardsArray) => {
    console.log(cardsArray);
// {id: 5, level: 1, word: 'Eager', meaning: 'আগ্রহী', pronunciation: 'ইগার'}

        // Remove all the html functionality before adding new one
                const MainPagetext = document.getElementById("MainPagetext");

                // Clear all the previous cards
                const ClearCards = document.getElementById("showCards");
                ClearCards.innerHTML = "";

    if (cardsArray.length === 0) {
        // alert("No Cards Found"); 

        MainPagetext.innerHTML = "";
 
        const nullArray = document.getElementById("MainPagetext");
        const div = document.createElement("div");
        div.innerHTML = `
       <div  class="flex flex-col justify-center items-center hind-siliguri bg-[#F8F8F8] text-center py-20 mt-8 rounded-2xl">
                 <img class="w-[120px]" src="assets/alert-error.png" alt="alert-error">
                 <h2 class="font-normal text-sm text-[#79716B] mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>
                 <h1 class="font-medium text-4xl text-[#292524]">নেক্সট Lesson এ যান</h1>
              </div>
        `
        nullArray.append(div);

        return;
    }



// Run a for of loop 
    for (const card of cardsArray) {

         //  Click Event will occured here just for add active class
        const allbtn = document.getElementById(`lesson-${card.level}`);
            


                // MainPagetext.style.display = "none";
                MainPagetext.innerHTML = "";


                
                // Remove active class from all buttons
                const findActiveClass = document.getElementsByClassName("active");
                // console.log(findActiveClass);
                for (let btnColor of findActiveClass) {
                    btnColor.classList.remove("active");
                    // console.log(btnColor);
                }
                 
                // Add active class to the clicked button
                    allbtn.classList.add("active");
                
            // Display Cards Functionality
            const showCards = document.getElementById("showCards");
            // showCards.innerHTML = "";
            const createDiv = document.createElement("div");
            
            createDiv.innerHTML = `
                                <div class="inter bg-white hover:bg-sky-200 rounded-lg p-1 ">
    <div class="text-center my-14">
        <h1 class="mt-2 mb-5 font-bold text-3xl">${card.word}</h1>
        <h3 class=" mb-6 font-medium text-xl">Meaning / Pronounciation</h3>
        <h3 class="mt-2 mb-10 font-semibold text-[#18181B] text-2xl">${card.meaning} / ${card.pronunciation}</h3>
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
         
        }
        
    }

       
const CardDetails = (BtnCardNo) => {
    // console.log(BtnCardNo);
    // fetch(`https://openapi.programming-hero.com/api/word/${BtnCardNo}`)
    // .then (Response => Response.json())
    // .then (data => console.log(data)) ;
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
    fetch("https://openapi.programming-hero.com/api/word/5")
    .then (Response => Response.json())
    .then (data => console.log(data.data)) ;
}
demo();
