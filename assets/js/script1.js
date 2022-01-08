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

var optListOne = document.getElementById("li1");
var optListTwo = document.getElementById("li2");
var optListThree = document.getElementById("li3");
var optListFour = document.getElementById("li4");

var optOne = document.createElement("button");
var optTwo = document.createElement("button");
var optThree = document.createElement("button");
var optFour = document.createElement("button");

optOne.className = "option1";
optTwo.className = "option2";
optThree.className = "option3";
optFour.className = "option4";

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
    firstQuestion.textContent = questions[0].questionOne;
    
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
    var secondQuestion = document.getElementById("question");
    secondQuestion.textContent = questions[1].questionTwo;

    optOne.textContent = questions[1].optionA;
    optTwo.textContent = questions[1].optionB;
    optThree.textContent = questions[1].optionC;
    optFour.textContent = questions[1].optionD;
        
    optListOne.appendChild(optOne);
    optListTwo.appendChild(optTwo);
    optListThree.appendChild(optThree);
    optListFour.appendChild(optFour); 
}

var showQuizThree = function () {
    var thirdQuestion = document.getElementById("question");
    thirdQuestion.textContent = questions[2].questionThree;

    optOne.textContent = questions[2].optionA;
    optTwo.textContent = questions[2].optionB;
    optThree.textContent = questions[2].optionC;
    optFour.textContent = questions[2].optionD;
        
    optListOne.appendChild(optOne);
    optListTwo.appendChild(optTwo);
    optListThree.appendChild(optThree);
    optListFour.appendChild(optFour); 
}

var showQuizFour = function () {
    var fourthQuestion = document.getElementById("question");
    fourthQuestion.textContent = questions[3].questionFour;

    optOne.textContent = questions[3].optionA;
    optTwo.textContent = questions[3].optionB;
    optThree.textContent = questions[3].optionC;
    optFour.textContent = questions[3].optionD;
        
    optListOne.appendChild(optOne);
    optListTwo.appendChild(optTwo);
    optListThree.appendChild(optThree);
    optListFour.appendChild(optFour); 
}

var showQuizFive = function () {
    var fifthQuestion = document.getElementById("question");
    fifthQuestion.textContent = questions[4].questionFive;

    optOne.textContent = questions[4].optionA;
    optTwo.textContent = questions[4].optionB;
    optThree.textContent = questions[4].optionC;
    optFour.textContent = questions[4].optionD;
        
    optListOne.appendChild(optOne);
    optListTwo.appendChild(optTwo);
    optListThree.appendChild(optThree);
    optListFour.appendChild(optFour); 
}


// when a user clicks an option
var firstQuestEl = function () {
    // If a user click a right option, the option 3, go to the second question with result
    document.querySelector(".option3").addEventListener("click", function() {
        correctAnswer();
        secondQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the second question with result and subtract the time
    document.querySelectorAll(".option1, .option2, .option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        secondQuestEl();
    }))
}

var secondQuestEl = function () {
    // show the second question and options
    showQuizTwo();

    // If If a user click a right option, the option 3, go to the third question with result
    document.querySelector(".option3").addEventListener("click", function() {
        correctAnswer();
        thridQuestionEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the third question with result and subtract the time
    document.querySelectorAll(".option1, .option2, .option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        thridQuestionEl();
    }))
}

var thridQuestionEl = function () {
    // show the third question and options
    showQuizThree();

     // If If a user click a right option, the option 4, go to the fourth question with result
     document.querySelector(".option4").addEventListener("click", function() {
        correctAnswer();
        fourthQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 3, go to the fourth question with result and subtract the time
    document.querySelectorAll(".option1, .option2, .option3").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        fourthQuestEl();
    }))
}

var fourthQuestEl = function () {
     // show the fourth question and options
     showQuizFour();

     // If If a user click a right option, the option 3, go to the fifth question with result
     document.querySelector(".option3").addEventListener("click", function() {
        correctAnswer();
        fifthQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the fifth question with result and subtract the time
    document.querySelectorAll(".option1, .option2, .option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        fifthQuestEl();
    }))
}

var fifthQuestEl = function () {
     // show the fifth question and options
     showQuizFive();

     // If If a user click a right option, the option 4, go to the end page with result
     document.querySelector(".option4").addEventListener("click", function() {
        correctAnswer();
    })

    // If a user click a wrong option, the option 1, or 2, 3, go to the end page with result and subtract the time
    document.querySelectorAll(".option1, .option2, .option3").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
    }))
}


// show quiz result
var correctAnswer = function () {
    result.textContent = "Correct!";
};
   
var wrongAnswer = function () {
    result.textContent = "Wrong!";
};

startBtn.addEventListener("click", startQuiz);
