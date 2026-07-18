const questions = [

    {
        question: "What are common signs of low blood sugar?",
        answers: [
            "Shaking, sweating, confusion, and dizziness",
            "Extreme thirst and frequent urination",
            "Fever and coughing",
            "Skin rash"
        ],
        correct: "Shaking, sweating, confusion, and dizziness"
    },

    {
        question: "What should you do for low blood sugar?",
        answers: [
            "Ignore it and wait",
            "Check blood sugar and use fast-acting glucose",
            "Exercise immediately",
            "Drink only water"
        ],
        correct: "Check blood sugar and use fast-acting glucose"
    },

    {
        question: "Which symptom is commonly linked to high blood sugar?",
        answers: [
            "Extreme thirst and frequent urination",
            "Shaking and sweating",
            "Broken bones",
            "Ear pain"
        ],
        correct: "Extreme thirst and frequent urination"
    },

    {
        question: "What should someone do if they have high blood sugar?",
        answers: [
            "Eat more sugar",
            "Ignore the symptoms",
            "Check blood sugar and follow their care plan",
            "Stop drinking water"
        ],
        correct: "Check blood sugar and follow their care plan"
    },

    {
        question: "What does DKA stand for?",
        answers: [
            "Diabetes Kidney Attack",
            "Diabetic Ketoacidosis",
            "Daily Ketone Adjustment",
            "Diabetes Knowledge Awareness"
        ],
        correct: "Diabetic Ketoacidosis"
    },

    {
        question: "Which symptoms can be signs of DKA?",
        answers: [
            "Nausea, vomiting, stomach pain, and fruity breath",
            "Sneezing and coughing",
            "Headache only",
            "Joint pain"
        ],
        correct: "Nausea, vomiting, stomach pain, and fruity breath"
    },

    {
        question: "What should you do if you have high ketones?",
        answers: [
            "Check ketones and contact your healthcare provider",
            "Eat candy",
            "Skip insulin",
            "Ignore the symptoms"
        ],
        correct: "Check ketones and contact your healthcare provider"
    },

    {
        question: "Which of these can cause insulin problems?",
        answers: [
            "Missed insulin doses or pump failure",
            "Drinking water",
            "Getting enough sleep",
            "Eating vegetables"
        ],
        correct: "Missed insulin doses or pump failure"
    },

    {
        question: "Why is checking blood sugar important during an emergency?",
        answers: [
            "It helps know if blood sugar is too high or too low",
            "It replaces insulin",
            "It prevents all illness",
            "It removes ketones instantly"
        ],
        correct: "It helps know if blood sugar is too high or too low"
    },

    {
        question: "When should someone seek medical help with diabetes?",
        answers: [
            "When symptoms are severe or DKA is suspected",
            "Only once a year",
            "Never",
            "Only after eating"
        ],
        correct: "When symptoms are severe or DKA is suspected"
    }

];

const questionText = document.querySelector("#question");
const answerBox = document.querySelector("#answers");
const nextButton = document.querySelector("#next-btn");
const result = document.querySelector("#result");


let questionNumber = 0;
let score = 0;


function displayQuestion() {

    let question = questions[questionNumber];

    questionText.textContent = question.question;

    answerBox.innerHTML = "";


    question.answers.forEach(function(answer) {

        let button = document.createElement("button");

        button.textContent = answer;


        button.addEventListener("click", function() {

            if (answer === question.correct) {

                result.textContent = "Correct!";

                score++;

            } else {

                result.textContent = "Incorrect!";

            }

        });


        answerBox.appendChild(button);

    });

}


nextButton.addEventListener("click", function() {

    questionNumber++;

    if (questionNumber < questions.length) {

        displayQuestion();

    } else {

        questionText.textContent = "Quiz Complete!";

        result.textContent = "Score: " + score + "/" + questions.length;

        answerBox.innerHTML = "";

        nextButton.style.display = "none";
    }

});


displayQuestion();

const symptoms = [
 
    {
        name: "Low Blood Sugar",
        signs: "Shaking, sweating, confusion, dizziness.",
        action: "Check blood sugar and use fast-acting glucose.",
        image: "images.jpg"
    },

    {
        name: "High Blood Sugar",
        signs: "Extreme thirst, tiredness, frequent urination.",
        action: "Check blood sugar and follow your care plan.",
        image: "high.jpg"
    },

    {
        name: "DKA (Diabetic Ketoacidosis)",
        signs: "Nausea, vomiting, stomach pain, fruity breath, rapid breathing.",
        action: "Seek medical help immediately.",
        image: "DKA.jpg"
    },

    {
        name: "High Ketones",
        signs: "Abdominal pain, nausea, vomiting, tiredness.",
        action: "Check ketones and contact your healthcare provider.",
        image: "https://www.novacares.com/images/th_KetoneAction_Guide.jpg"
    },

    {
        name: "Insulin Problems",
        signs: "Missed insulin doses, pump failure, or incorrect insulin amount.",
        action: "Check equipment, take insulin as directed, and monitor glucose.",
        image: "prob.jpg"
    }
];



const cardContainer = document.querySelector("#card-container");


function displaySymptoms() {

    symptoms.forEach(function(symptom) {

        cardContainer.innerHTML += `
            <div class="card">
                <h3>${symptom.name}</h3>
                <p>Signs: ${symptom.signs}</p>
                <p>What to do: ${symptom.action}</p>
                  <img src="${symptom.image}" alt="${symptom.name}">
            </div>
        `;

    });
    

}


displaySymptoms();