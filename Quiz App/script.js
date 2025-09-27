
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare"
  }
]
let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
function loadQuestion() {
const newQuestion = questions[currentQuestionIndex];
questionEl.textContent = newQuestion.question;
optionsEl.innerHTML = '';
newQuestion.options.forEach(option => {
  const button = document.createElement('button');
  button.textContent = option;
  button.classList.add('option-btn');
  button.onclick = () => selectOption(option);
  optionsEl.appendChild(button);
});
function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = 'Quiz Over!';
        optionsEl.innerHTML = '';
        scoreEl.textContent = `Final Score: ${score} / ${questions.length}`;
    }
}
}
loadQuestion(); 