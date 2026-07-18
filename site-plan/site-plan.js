const questions = [

    {
        question: "What are common signs of low blood sugar?",
        answers: [
            "Extreme thirst and frequent urination",
            "Shaking, sweating, confusion, and dizziness",
            "Nausea and stomach pain",
            "Fruity breath"
        ],
        correct: "Shaking, sweating, confusion, and dizziness"
    },

    {
        question: "What should you do when experiencing low blood sugar?",
        answers: [
            "Stop checking blood sugar",
            "Exercise immediately",
            "Use fast-acting glucose",
            "Ignore the symptoms"
        ],
        correct: "Use fast-acting glucose"
    },

    {
        question: "Which symptom is linked to high blood sugar?",
        answers: [
            "Shaking and sweating",
            "Fruity breath",
            "Vomiting only",
            "Extreme thirst, tiredness, and frequent urination"
        ],
        correct: "Extreme thirst, tiredness, and frequent urination"
    },

    {
        question: "What should you do if your blood sugar is high?",
        answers: [
            "Check blood sugar and follow your care plan",
            "Stop taking insulin",
            "Eat more sugar",
            "Ignore the symptoms"
        ],
        correct: "Check blood sugar and follow your care plan"
    },

    {
        question: "What does DKA stand for?",
        answers: [
            "Diabetes Knowledge Assessment",
            "Daily Ketone Activity",
            "Diabetic Ketoacidosis",
            "Diabetes Kidney Attack"
        ],
        correct: "Diabetic Ketoacidosis"
    },

    {
        question: "Which symptoms can be signs of DKA?",
        answers: [
            "Coughing and sneezing",
            "Nausea, vomiting, stomach pain, and fruity breath",
            "Extreme thirst only",
            "Shaking and sweating"
        ],
        correct: "Nausea, vomiting, stomach pain, and fruity breath"
    },

    {
        question: "What should you do if you have high ketones?",
        answers: [
            "Drink soda",
            "Skip insulin",
            "Ignore the symptoms",
            "Check ketones and contact your doctor"
        ],
        correct: "Check ketones and contact your doctor"
    },

    {
        question: "Which symptom may happen with high ketones?",
        answers: [
            "Improved energy",
            "No symptoms",
            "Nausea, vomiting, and tiredness",
            "Better vision"
        ],
        correct: "Nausea, vomiting, and tiredness"
    },

    {
        question: "What can cause insulin problems?",
        answers: [
            "Getting enough sleep",
            "Missed insulin or pump failure",
            "Eating vegetables",
            "Drinking water"
        ],
        correct: "Missed insulin or pump failure"
    },

    {
        question: "What should you do if there is an insulin problem?",
        answers: [
            "Wait several days",
            "Ignore it",
            "Check insulin equipment",
            "Stop monitoring blood sugar"
        ],
        correct: "Check insulin equipment"
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
        name: "Insulin Problems",
        signs: "Missed insulin or pump failure.",
        action: "Check insulin equipment.",
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