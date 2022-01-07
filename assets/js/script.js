const questions = [
    {
        questionOne: "Commonly used data types DO NOT include:",
        optionA: "1.strings",
        optionB: "2.booleans",
        optionC: "3.alerts",
        optionD: "4.numbers", 
    }, 

    {
        questionTwo: "The condition in an if / else statement is enclosed within _____.",
        optionA: "1.quotes", 
        optionB: "2.curly brackets",
        optionC: "3.parentheses",
        optionD: "4.square brackets",
    },

    {
        questionThree: "Arrays in JavaScript can be used to store _____.",
        optionA: "1.numbers and strings",
        optionB: "2.other arrays",
        optionC: "3.booleans",
        optionD: "4.all of the above",
    },

    {
        questionFour: "String values must be enclosed within _____ when being assigned to variables",
        optionA: "1.commas",
        optionB: "2.curly brackets",
        optionC: "3.quotes",
        optionD: "4.parentheses",
    },

    {
        questionsFive: "A very useful tool used during development and debugging for printing content to the debugger is",
        optionA: "1.JavaScript",
        optionB: "2.terminal/bash",
        optionC: "3.for loops",
        optionD: "4.console log",
    }
];

// hide quiz container when starts
document.getElementById("quiz-box").style.display = "none";

// set start button
var startBtn = document.querySelector("#start-btn");

// when start quiz button is clicked, quiz will start
var startQuiz = function() {
    // hide quiz start container
    hideStartBox();

    // show question container
    document.getElementById("quiz-box").style.display = "block";

    // get options
    var answer1 = document.getElementById("op1");
    var answer2 = document.getElementById("op2");
    var answer3 = document.getElementById("op3");
    var answer4 = document.getElementById("op4");

    // If user gets a correct answer, go to the next question. 
    var answerClicked = false
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[1].questionTwo;
            // show answer options
            answer1.textContent = questions[1].optionA;
            answer2.textContent = questions[1].optionB;
            answer3.textContent = questions[1].optionC;
            answer4.textContent = questions[1].optionD;
            // show correct/wrong answer result
            var quizResult = document.getElementById("result");
            var correctResult = document.createElement("h3");
            correctResult.textContent = "Correct!";
            quizResult.appendChild(correctResult);
        }

    })

    // If user gets a wrong answer, go to next question with time deduction.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[1].questionTwo;
            // show answer options
            answer1.textContent = questions[1].optionA;
            answer2.textContent = questions[1].optionB;
            answer3.textContent = questions[1].optionC;
            answer4.textContent = questions[1].optionD;
            // show correct/wrong answer result
            var quizResult = document.getElementById("result");
            var wrongResult = document.createElement("h3");
            wrongResult.textContent = "Wrong!";
            quizResult.appendChild(wrongResult);
        }
    }))
};
        
setInterval(quizTimer, 1000);

var totalTime = 76;
var quizTimer = setInterval(function() {
    totalTime = totalTime - 1;
    if (totalTime < 0) {
        clearInterval(totalTime);
    }
    else {
        document.getElementById("time").innerHTML = totalTime;
    }
}, 1000);

// hide quiz start container
var hideStartBox = function() {
    var startBox = document.getElementById("start-box");
    if (startBox.style.display === "none") {
        startBox.style.display = "flex";
    }
    else {
        startBox.style.display = "none";
    }
};

startBtn.addEventListener("click", startQuiz);