const questions = [

    {
        question: "What are common signs of low blood sugar?",
        answers: [
            "Shaking, sweating, confusion, and dizziness",
            "Extreme thirst and frequent urination",
            "Nausea and fruity breath",
            "Missed insulin doses"
        ],
        correct: "Shaking, sweating, confusion, and dizziness"
    },

    {
        question: "What should someone do when experiencing low blood sugar?",
        answers: [
            "Ignore the symptoms",
            "Use fast-acting glucose",
            "Stop checking blood sugar",
            "Skip insulin"
        ],
        correct: "Use fast-acting glucose"
    },

    {
        question: "Which symptoms are linked to high blood sugar?",
        answers: [
            "Shaking and sweating",
            "Extreme thirst, tiredness, and frequent urination",
            "Fruity breath only",
            "Stomach pain"
        ],
        correct: "Extreme thirst, tiredness, and frequent urination"
    },

    {
        question: "What should you do if your blood sugar is high?",
        answers: [
            "Check blood sugar and follow your care plan",
            "Eat more sugar",
            "Ignore the symptoms",
            "Stop using insulin"
        ],
        correct: "Check blood sugar and follow your care plan"
    },

    {
        question: "What does DKA stand for?",
        answers: [
            "Diabetic Ketoacidosis",
            "Diabetes Kidney Attack",
            "Daily Ketone Assessment",
            "Diabetes Knowledge Awareness"
        ],
        correct: "Diabetic Ketoacidosis"
    },

    {
        question: "Which symptoms may be signs of DKA?",
        answers: [
            "Coughing and sneezing",
            "Nausea, vomiting, stomach pain, and fruity breath",
            "Improved energy",
            "Low thirst"
        ],
        correct: "Nausea, vomiting, stomach pain, and fruity breath"
    },

    {
        question: "What should someone do if they have high ketones?",
        answers: [
            "Ignore the symptoms",
            "Drink only water",
            "Check ketones and contact your doctor",
            "Stop monitoring blood sugar"
        ],
        correct: "Check ketones and contact your doctor"
    },

    {
        question: "What can cause insulin problems?",
        answers: [
            "Drinking water",
            "Getting enough sleep",
            "Missed insulin doses or pump failure",
            "Eating healthy foods"
        ],
        correct: "Missed insulin doses or pump failure"
    },

    {
        question: "What is insulin resistance?",
        answers: [
            "When the body does not respond well to insulin",
            "When the body produces too much glucose",
            "When someone never needs insulin",
            "When blood sugar is always low"
        ],
        correct: "When the body does not respond well to insulin"
    },

    {
        question: "Which can be a sign of insulin resistance?",
        answers: [
            "Increased thirst, tiredness, and frequent urination",
            "Fruity breath only",
            "Shaking after exercise",
            "No symptoms ever"
        ],
        correct: "Increased thirst, tiredness, and frequent urination"
    }

];


const questionText = document.querySelector("#question");
const answerBox = document.querySelector("#answers");
const nextButton = document.querySelector("#next-btn");
const result = document.querySelector("#result");

let currentQuestion = 0;
let score = 0;



function showQuestion() {

    let quiz = questions[currentQuestion];

    questionText.textContent = quiz.question;
    answerBox.innerHTML = "";

    quiz.answers.forEach(answer => {

        let button = document.createElement("button");

        button.textContent = answer;

       button.addEventListener("click", function () {

            if (answer === quiz.correct) {
                result.textContent = "Correct!";
                score++;
            } 
            else {
                result.textContent = "Incorrect!";
            }

        });

        answerBox.appendChild(button);

    });

}



nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        result.textContent = "";
    }
    else {
        questionText.textContent = "Quiz Finished!";
        result.textContent = `Score: ${score}/${questions.length}`;
        answerBox.innerHTML = "";
        nextButton.style.display = "none";
    }

};


showQuestion();




const symptoms = [
    {
        name: "Low Blood Sugar",
        signs: "Shaking, sweating, confusion, dizziness.",
        action: "Use fast-acting glucose.",
        image: "images.jpg"
    },

    {
        name: "High Blood Sugar",
        signs: "Extreme thirst, tiredness, frequent urination.",
        action: "Check blood sugar and follow your care plan.",
        image: "high.jpg"
    },

    {
        name: "DKA",
        signs: "Nausea, vomiting, stomach pain, fruity breath.",
        action: "Seek medical help.",
        image: "DKA.jpg"
    },

    {
        name: "High Ketones",
        signs: "Nausea, vomiting, tiredness.",
        action: "Check ketones and contact your doctor.",
        image: "ketones.jpg"
    },

    {
         name: "Insulin Resistance",
    signs: "Tiredness, increased thirst, frequent urination, increased hunger.",
    action: "Monitor blood sugar, follow a healthy lifestyle, and talk with a healthcare provider.",
    image: "prob.jpg"
    }
];


const cardContainer = document.querySelector("#card-container");


function showSymptoms() {

    symptoms.forEach(symptom => {

        cardContainer.innerHTML += `
            <div class="card">
                <img src="${symptom.image}" alt="${symptom.name}">
                <h3>${symptom.name}</h3>
                <p>${symptom.signs}</p>
                <p>${symptom.action}</p>
            </div>
        `;

    });

}


showSymptoms();