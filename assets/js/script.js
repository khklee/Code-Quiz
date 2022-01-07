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

    // If user gets a right answer, go to next question. If not, go to next question with time deduction.
    var answerClicked = false
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            var Question2 = document.getElementById("question");
            Question2.textContent = questions[1].questionTwo;
        }
        else {

        }
    })
};

setInterval(quizTimer, 1000);

var totalTime = 76;
var quizTimer = setInterval(function() {
    totalTime = totalTime - 1;
    if (totalTime <= 0) {
        clearInterval(totalTime);
    }
    else {
        document.getElementById("time").innerHTML = totalTime;
    }
}, 1000);




 


/* var hideQuizBox = function() {
    var quizBox = document.getElementById("quiz-box");
    if (quizBox.style.display === "block") {
        quizBox.style.display = "none";
    }
    else {
        quizBox.style.display = "block";
    }
}; */

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


var createOptions = function() {
    var optionListEl = document.createElement("div");
    optionListEl.className = "answer-options";
    
    var optionBtn1 = document.createElement("button");
    optionBtn1.textContent = questions[0].optionA;
    optionBtn1.className = "option-btn";

    optionListEl.appendChild(optionBtn1);
};



startBtn.addEventListener("click", startQuiz);