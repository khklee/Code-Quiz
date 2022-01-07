const questions = [
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

var answer1 = document.getElementById("op1");
var answer2 = document.getElementById("op2");
var answer3 = document.getElementById("op3");
var answer4 = document.getElementById("op4");

var totalTime = 76;

/* var quizResult = document.getElementById("result");
var correctOrWrong = document.createElement("h3"); */

// hide quiz container
document.getElementById("quiz-box").style.display = "none";

// hide quiz result container 
document.getElementById("quiz-result").style.display = "none";
var correct = document.getElementById("correct");

// set start button
var startBtn = document.querySelector("#start-btn");

// when start quiz button is clicked, quiz will start
var startQuiz = function() {
    // hide quiz start container
    hideStartBox();

    // show question container
    document.getElementById("quiz-box").style.display = "block";

    // set timer
    setInterval(quizTimer, 1000);
    var quizTimer = setInterval(function() {
        totalTime = totalTime - 1;
        if (totalTime < 0) {
            clearInterval(totalTime);
        }
        else {
            document.getElementById("time").innerHTML = totalTime;
        }
    }, 1000);

    firstQuestionEl();

    /* If a user gets a correct answer for the first question, go to the second question. 
    var answerClicked = false
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show correct/wrong answer result
            var quizResult = document.getElementById("result");
            var correctResult = document.createElement("h3");
            correctResult.textContent = "Correct!";
            quizResult.appendChild(correctResult);
        }
    })

    // If a user gets a wrong answer for the first question, go to second question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show correct/wrong answer result
            var quizResult = document.getElementById("result");
            var wrongResult = document.createElement("h3");
            wrongResult.textContent = "Wrong!";
            quizResult.appendChild(wrongResult);
            // subtract from the clock
            totalTime = totalTime - 15;
        }
    })) */
    
    /* If a user gets a correct answer for the second question, go to the third question. 
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[1].questionThree;
            // show answer options
            answer1.textContent = questions[1].optionA;
            answer2.textContent = questions[1].optionB;
            answer3.textContent = questions[1].optionC;
            answer4.textContent = questions[1].optionD;
            // show correct/wrong answer result
            correctResult = document.getElementById("next-result")
            correctResult.textContent = "Correct!";
            
        }
    })
    // If a user gets a wrong answer for the second question, go to third question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[1].questionThree;
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
            // subtract from the clock
            totalTime = totalTime - 15;
        }
    })) */
};

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

var firstQuestionEl = function() {
    // If a user gets a correct answer for the first question, go to the second question. 
    var answerClicked = false
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show correct/wrong answer result
            document.getElementById("quiz-result").style.display = "block";

            /*var quizResult = document.getElementById("result");
            var correctResult = document.createElement("h3"); 
            correctOrWrong.textContent = "Correct!";
            quizResult.appendChild(correctOrWrong); */
        }
    })

    // If a user gets a wrong answer for the first question, go to second question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show correct/wrong answer result
            correct.textContent = "Wrong!"
            document.getElementById("quiz-result").style.display = "block";


            /* var quizResult = document.getElementById("result");
            var wrongResult = document.createElement("h3");
            correctOrWrong.textContent = "Wrong!";
            quizResult.appendChild(wrongResult); */
            // subtract from the clock
            totalTime = totalTime - 15;
        }
    }))
};

startBtn.addEventListener("click", startQuiz);
