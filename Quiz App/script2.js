const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      answer: "Paris"},
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
      answer: "William Shakespeare"
    },  
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2"],
      answer: "2"
    }, {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb"],
      answer: "Au"
    }
];
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const headingEl = document.querySelector(".quiz-question-title");
const submitBtn = document.getElementById("submit-button");
let currentQuestionIndex = 0;
let score = 0;

let selectedOption = null;

function showQuestion(){
    const newQuestion = questions[currentQuestionIndex];
    questionEl.textContent = newQuestion.question;
    optionsEl.innerHTML = "";
    selectedOption = null;
    newQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;

        button.addEventListener("click", function(){
            selectedOption = option;
            // Highlight selected button
            Array.from(optionsEl.children).forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
        optionsEl.appendChild(button);
    });
}

function handleSubmit() {
    const newQuestion = questions[currentQuestionIndex];
    if (selectedOption === null) {
        alert("Please select an option!");
        return;
    }
    if (selectedOption === newQuestion.answer) {
        score += 20;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        scoreEl.textContent = score;
        showQuestion();
    } else {
        questionEl.textContent = `Quiz is over😎`;
        optionsEl.innerHTML = "";
        scoreEl.textContent = `Final score is ${score}/${questions.length * 20}`;
        headingEl.style.display = "none";
        submitBtn.style.display = "none"
    }
}

// Ensure only one event listener is attached
submitBtn.addEventListener("click", handleSubmit);

showQuestion();

// function checkAnswer(selectedOption){
//         if(selectedOption === newQuestion.answer){
//            score+=20; 
//         }
//         currentQuestionIndex++;
//         if (currentQuestionIndex < questions.length){
            
//             scoreEl.textContent = score;
//             showQuestion();
//         }else{
//             questionEl.textContent = `Quiz is over😎`;
//             optionsEl.innerHTML = "";
//                scoreEl.textContent = `Final score is ${score}/${questions.length * 20}`;
//                headingEl.style.display = "none";
//         }
//     }

