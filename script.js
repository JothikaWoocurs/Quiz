const questions = [
    {
        question: "What does 'HTML' stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperText Machine Language",
            "HighText Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which programming language is primarily used for Android app development?",
        options: ["Swift", "Java", "Python", "C#"],
        correct: 1
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        options: ["Python", "C++", "JavaScript", "Ruby"],
        correct: 2
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "SMTP", "FTP", "IMAP"],
        correct: 1
    },
    {
        question: "What is the purpose of version control systems like Git?",
        options: [
            "Writing code faster",
            "Managing file permissions",
            "Tracking changes in code",
            "Compiling code"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const summaryElement = document.getElementById("summary");

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
    totalElement.textContent = questions.length;

    summaryElement.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.options[q.correct];
        const isCorrect = userAnswer === q.correct;

        const summaryItem = document.createElement("p");
        summaryItem.innerHTML = `
            <strong>Q${index + 1}: ${q.question}</strong><br>
            Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.options[userAnswer]}</span>
            ${!isCorrect ? `<br>Correct Answer: <span style="color: green">${correctAnswer}</span>` : ""}
        `;
        summaryElement.appendChild(summaryItem);
    });
}
function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;

    summaryElement.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.options[q.correct];
        const isCorrect = userAnswer === q.correct;

        const summaryItem = document.createElement("p");
        summaryItem.innerHTML = `
            <strong>Q${index + 1}: ${q.question}</strong><br>
            Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.options[userAnswer]}</span>
            ${!isCorrect ? `<br>Correct Answer: <span style="color: green">${correctAnswer}</span>` : ""}
        `;
        summaryElement.appendChild(summaryItem);
    });
}
function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;

    summaryElement.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.options[q.correct];
        const isCorrect = userAnswer === q.correct;

        const summaryItem = document.createElement("p");
        summaryItem.innerHTML = `
            <strong>Q${index + 1}: ${q.question}</strong><br>
            Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.options[userAnswer]}</span>
            ${!isCorrect ? `<br>Correct Answer: <span style="color: green">${correctAnswer}</span>` : ""}
        `;
        summaryElement.appendChild(summaryItem);
    });
}
function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;

    summaryElement.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.options[q.correct];
        const isCorrect = userAnswer === q.correct;

        const summaryItem = document.createElement("p");
        summaryItem.innerHTML = `
            <strong>Q${index + 1}: ${q.question}</strong><br>
            Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.options[userAnswer]}</span>
            ${!isCorrect ? `<br>Correct Answer: <span style="color: green">${correctAnswer}</span>` : ""}
        `;
        summaryElement.appendChild(summaryItem);
    });
}
function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;

    summaryElement.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.options[q.correct];
        const isCorrect = userAnswer === q.correct;

        const summaryItem = document.createElement("p");
        summaryItem.innerHTML = `
            <strong>Q${index + 1}: ${q.question}</strong><br>
            Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.options[userAnswer]}</span>
            ${!isCorrect ? `<br>Correct Answer: <span style="color: green">${correctAnswer}</span>` : ""}
        `;
        summaryElement.appendChild(summaryItem);
    });
}
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.value);
        userAnswers[currentQuestion] = selectedIndex;

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
    userAnswers = [];
    quiz.classList.remove("hidden");
    result.classList.add("hidden");
    loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

// Initialize quiz
loadQuestion();
