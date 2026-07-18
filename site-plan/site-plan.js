const questions = [
    {
        question: "Can high blood sugar cause your body to be pale?",
        answers: [
            "True",
            "False"
        ],
        correct: "False"
    },

    {
        question: "What causes Type 1 Diabetes?",
        answers: [
        
            "Eating too much sugar",
            "Having a bad diet",
            "The immune system attacks beta cells in the pancreas"
        ],
        correct: "The immune system attacks beta cells in the pancreas"
    },

    {
        question: "What hormone does the pancreas stop producing in Type 1 Diabetes?",
        answers: [
            "Insulin",
            "Adrenaline",
            "Glucose"
        ],
        correct: "Insulin"
    },

    {
        question: "Which of these is a common sign of low blood sugar?",
        answers: [
            
            "Growing taller",
            "Shaking and sweating",
            "Improved vision"
        ],
        correct: "Shaking and sweating"
    },

    {
        question: "What can help treat mild low blood sugar?",
        answers: [
            
            "Skipping all meals",
            "Drinking only water",
            "Fast-acting sugar such as glucose tablets"
        ],
        correct: "Fast-acting sugar such as glucose tablets"
    },

    {
        question: "Which symptom can be a sign of high blood sugar?",
        answers: [
           
            "Cold hands only",
             "Extreme thirst",
            "Better concentration"
        ],
        correct: "Extreme thirst"
    },

    {
        question: "What device can measure blood glucose levels?",
        answers: [
           
            "Thermometer",
            "Blood pressure cuff",
            "Glucose meter"
        ],
        correct: "Glucose meter"
    },

    {
        question: "What is insulin used for in the body?",
        answers: [
            "Helping glucose enter cells for energy",
            "Making bones stronger",
            "Increasing body temperature"
        ],
        correct: "Helping glucose enter cells for energy"
    },

    {
        question: "Which of these can be a warning sign of diabetic ketoacidosis (DKA)?",
        answers: [
            "Feeling relaxed",
            "Nausea and vomiting",
            "Improved energy"
        ],
        correct: "Nausea and vomiting"
    },

    {
        question: "Why is it important to recognize diabetes emergency symptoms?",
        answers: [
            "To avoid drinking water",
            "To stop checking blood sugar",
            "To respond quickly and get help when needed",

        ],
        correct: "To respond quickly and get help when needed"
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