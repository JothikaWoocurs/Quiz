const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "George Orwell", "J.K. Rowling"],
        correct: 0
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 2
    },
    {
        question: "What is 5 + 7?",
        options: ["12", "13", "14", "15"],
        correct: 0
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        options: ["Python", "C++", "JavaScript", "Ruby"],
        correct: 2
    },
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach((option, index) => {
        const optionContainer = document.createElement("div");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.id = `option${index}`;
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.textContent = option;

        radio.addEventListener("change", () => {
            nextBtn.disabled = false;
        });

        optionContainer.appendChild(radio);
        optionContainer.appendChild(label);
        optionsElement.appendChild(optionContainer);
    });

    nextBtn.disabled = true;
}

function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreElement.textContent = score;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.value);
        if (selectedIndex === questions[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quiz.classList.remove("hidden");
    result.classList.add("hidden");
    loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

// Initialize quiz
loadQuestion();
