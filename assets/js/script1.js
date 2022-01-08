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
        questionFive: "A very useful tool used during development and debugging for printing content to the debugger is",
        optionA: "1.JavaScript",
        optionB: "2.terminal/bash",
        optionC: "3.for loops",
        optionD: "4.console log",
    }
];

var startBtn = document.getElementById("start-btn");
var startBox = document.getElementById("start-box");
var result = document.getElementById("result");

var optOne = document.createElement("button");
var optTwo = document.createElement("button");
var optThree = document.createElement("button");
var optFour = document.createElement("button");

var startQuiz = function () {
    // hide start box 
    startBox.remove();
    // show first question and options
    showQuizOne();
    // when a user clicks an option
    firstQuestEl();
}

// show quiz question 1 and options
var showQuizOne = function () {
    var firstQuestion = document.getElementById("question");
    
    var optListOne = document.getElementById("li1");
    var optListTwo = document.getElementById("li2");
    var optListThree = document.getElementById("li3");
    var optListFour = document.getElementById("li4");

    firstQuestion.textContent = questions[0].questionOne;
    optOne.className = "options";
    optTwo.className = "options";
    optThree.className = "options";
    optFour.className = "options";
    
    optOne.textContent = questions[0].optionA;
    optTwo.textContent = questions[0].optionB;
    optThree.textContent = questions[0].optionC;
    optFour.textContent = questions[0].optionD;

    optListOne.appendChild(optOne);
    optListTwo.appendChild(optTwo);
    optListThree.appendChild(optThree);
    optListFour.appendChild(optFour); 
}

// show quiz question 2 and options
var showQuizTwo = function () {

}


// when a user clicks an option
var firstQuestEl = function () {
    // If a user click a right option, an option 3, go to the second question
    optThree.addEventListener("click", function() {
        showQuizTwo();
        correctAnswer();
    })
}

// show quiz result
var correctAnswer = function () {
    result.textContent = "Correct!";
    
};
   
var wrongAnswer = function () {
    result.textContent = "Wrong!";
};

startBtn.addEventListener("click", startQuiz);
