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

// declare variables
var totalTime = 76;
var score = document.getElementById("time");

var startBtn = document.getElementById("start-btn");
var startBox = document.getElementById("start-box");
var title = document.getElementById("title");
var titleBox = document.getElementById("title-box");
var scoreDescription = document.getElementById("how-to");

var quizBox = document.getElementById("quiz-box");

var contentBox = document.getElementById("content-box");
var optListOne = document.getElementById("li1");
var optListTwo = document.getElementById("li2");
var optListThree = document.getElementById("li3");
var optListFour = document.getElementById("li4");

var result = document.getElementById("result");

var quizTimer;

var submitBtn = document.createElement("button");

// start quiz 
var startQuiz = function () {
    // hide start box 
    startBox.style.display = "none";
    
    // set timer
    setInterval(quizTimer, 1000);
    quizTimer = setInterval(function() {
        totalTime = totalTime - 1;
        if (totalTime <= 0) {
            clearInterval(totalTime);
            endPage();
        }
        else {
            document.getElementById("time").innerHTML = totalTime;
        }
    }, 1000);

    // show first question and options
    showQuizOne();
    
    // when a user clicks an option
    firstQuestEl();
}

// show quiz question 1 and options
var showQuizOne = function () {
    var firstQuestion = document.getElementById("question");
    firstQuestion.textContent = questions[0].questionOne;
    
    var q1optOne = document.createElement("button");
    var q1optTwo = document.createElement("button");
    var q1optThree = document.createElement("button");
    var q1optFour = document.createElement("button");

    q1optOne.className = "option-btns q1option1";
    q1optTwo.className = "option-btns q1option2";
    q1optThree.className = "option-btns q1option3";
    q1optFour.className = "option-btns q1option4";

    q1optOne.textContent = questions[0].optionA;
    q1optTwo.textContent = questions[0].optionB;
    q1optThree.textContent = questions[0].optionC;
    q1optFour.textContent = questions[0].optionD;
        
    optListOne.appendChild(q1optOne);
    optListTwo.appendChild(q1optTwo);
    optListThree.appendChild(q1optThree);
    optListFour.appendChild(q1optFour); 
}

// show quiz question 2 and options
var showQuizTwo = function () {
    var secondQuestion = document.getElementById("question");
    secondQuestion.textContent = questions[1].questionTwo;

    var q2optOne = document.createElement("button");
    var q2optTwo = document.createElement("button");
    var q2optThree = document.createElement("button");
    var q2optFour = document.createElement("button");

    q2optOne.className = "option-btns q2option1";
    q2optTwo.className = "option-btns q2option2";
    q2optThree.className = "option-btns q2option3";
    q2optFour.className = "option-btns q2option4";

    q2optOne.textContent = questions[1].optionA;
    q2optTwo.textContent = questions[1].optionB;
    q2optThree.textContent = questions[1].optionC;
    q2optFour.textContent = questions[1].optionD;
        
    optListOne.appendChild(q2optOne);
    optListTwo.appendChild(q2optTwo);
    optListThree.appendChild(q2optThree);
    optListFour.appendChild(q2optFour); 
}

// show quiz question 3 and options
var showQuizThree = function () {
    var thirdQuestion = document.getElementById("question");
    thirdQuestion.textContent = questions[2].questionThree;
    
    var q3optOne = document.createElement("button");
    var q3optTwo = document.createElement("button");
    var q3optThree = document.createElement("button");
    var q3optFour = document.createElement("button");

    q3optOne.className = "option-btns q3option1";
    q3optTwo.className = "option-btns q3option2";
    q3optThree.className = "option-btns q3option3";
    q3optFour.className = "option-btns q3option4";

    q3optOne.textContent = questions[2].optionA;
    q3optTwo.textContent = questions[2].optionB;
    q3optThree.textContent = questions[2].optionC;
    q3optFour.textContent = questions[2].optionD;
        
    optListOne.appendChild(q3optOne);
    optListTwo.appendChild(q3optTwo);
    optListThree.appendChild(q3optThree);
    optListFour.appendChild(q3optFour); 
}

// show quiz question 4 and options
var showQuizFour = function () {
    var fourthQuestion = document.getElementById("question");
    fourthQuestion.textContent = questions[3].questionFour;

    var q4optOne = document.createElement("button");
    var q4optTwo = document.createElement("button");
    var q4optThree = document.createElement("button");
    var q4optFour = document.createElement("button");

    q4optOne.className = "option-btns q4option1";
    q4optTwo.className = "option-btns q4option2";
    q4optThree.className = "option-btns q4option3";
    q4optFour.className = "option-btns q4option4";

    q4optOne.textContent = questions[3].optionA;
    q4optTwo.textContent = questions[3].optionB;
    q4optThree.textContent = questions[3].optionC;
    q4optFour.textContent = questions[3].optionD;
        
    optListOne.appendChild(q4optOne);
    optListTwo.appendChild(q4optTwo);
    optListThree.appendChild(q4optThree);
    optListFour.appendChild(q4optFour); 
}

// show quiz question 5 and options
var showQuizFive = function () {
    var fifthQuestion = document.getElementById("question");
    fifthQuestion.textContent = questions[4].questionFive;

    var q5optOne = document.createElement("button");
    var q5optTwo = document.createElement("button");
    var q5optThree = document.createElement("button");
    var q5optFour = document.createElement("button");

    q5optOne.className = "option-btns q5option1";
    q5optTwo.className = "option-btns q5option2";
    q5optThree.className = "option-btns q5option3";
    q5optFour.className = "option-btns q5option4";

    q5optOne.textContent = questions[4].optionA;
    q5optTwo.textContent = questions[4].optionB;
    q5optThree.textContent = questions[4].optionC;
    q5optFour.textContent = questions[4].optionD;
        
    optListOne.appendChild(q5optOne);
    optListTwo.appendChild(q5optTwo);
    optListThree.appendChild(q5optThree);
    optListFour.appendChild(q5optFour); 
}

// when a user clicks an option of the first question
var firstQuestEl = function () {
    // If a user click a right option, the option 3, go to the second question with result
    document.querySelector(".q1option3").addEventListener("click", function() {
        correctAnswer();
        secondQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the second question with result and subtract the time
    document.querySelectorAll(".q1option1, .q1option2, .q1option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        secondQuestEl();
        totalTime = totalTime - 15;
    }))
}

// when a user clicks an option of the second question
var secondQuestEl = function () {
    // hide the options of the first question
    document.querySelectorAll(".q1option1, .q1option2, .q1option3, .q1option4").forEach(el => el.style.display = "none");
    
    // show the second question and options
    showQuizTwo();

    // If If a user click a right option, the option 3, go to the third question with result
    document.querySelector(".q2option3").addEventListener("click", function() {
        correctAnswer();
        thridQuestionEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the third question with result and subtract the time
    document.querySelectorAll(".q2option1, .q2option2, .q2option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        thridQuestionEl();
        totalTime = totalTime - 15;
    }))
}

// when a user clicks an option of the third question
var thridQuestionEl = function () {
    // hide the options of the second question
    document.querySelectorAll(".q2option1, .q2option2, .q2option3, .q2option4").forEach(el => el.style.display = "none");

    // show the third question and options
    showQuizThree();

     // If If a user click a right option, the option 4, go to the fourth question with result
     document.querySelector(".q3option4").addEventListener("click", function() {
        correctAnswer();
        fourthQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 3, go to the fourth question with result and subtract the time
    document.querySelectorAll(".q3option1, .q3option2, .q3option3").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        fourthQuestEl();
        totalTime = totalTime - 15;
    }))
}

// when a user clicks an option of the fourth question
var fourthQuestEl = function () {
    // hide the options of the third question
    document.querySelectorAll(".q3option1, .q3option2, .q3option3, .q3option4").forEach(el => el.style.display = "none");

     // show the fourth question and options
     showQuizFour();

     // If If a user click a right option, the option 3, go to the fifth question with result
     document.querySelector(".q4option3").addEventListener("click", function() {
        correctAnswer();
        fifthQuestEl();
    })

    // If a user click a wrong option, the option 1, or 2, 4, go to the fifth question with result and subtract the time
    document.querySelectorAll(".q4option1, .q4option2, .q4option4").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        fifthQuestEl();
        totalTime = totalTime - 15;
    }))
}

// when a user clicks an option of the fifth question
var fifthQuestEl = function () {
    // hide the options of the fourth question
    document.querySelectorAll(".q4option1, .q4option2, .q4option3, .q4option4").forEach(el => el.style.display = "none");

     // show the fifth question and options
     showQuizFive();

     // If If a user click a right option, the option 4, go to the end page with result
     document.querySelector(".q5option4").addEventListener("click", function() {
        correctAnswer();
        // stop the timer
        endPage();
    })

    // If a user click a wrong option, the option 1, or 2, 3, go to the end page with result and subtract the time
    document.querySelectorAll(".q5option1, .q5option2, .q5option3").forEach(el => el.addEventListener("click", function() {
        wrongAnswer();
        totalTime = totalTime - 15;
        // stop the timer
        endPage();
    }))
}

// show quiz result, correct/wrong
var correctAnswer = function () {
    result.textContent = "Correct!";
};
   
var wrongAnswer = function () {
    result.textContent = "Wrong!";
};

// show the end page
var endPage = function () {
    // remove quiz box 
    quizBox.style.display = "none";
    // show start container
    startBox.style.display = "flex";
    // change the title    
    title.textContent = "All done!";
    // show the final score
    scoreDescription.textContent = "Your final score is " + totalTime + ".";
    // change the start button to submit
    createSubmit();
    // disappear result after 3 seconds
    setTimeout(function () {
        result.style.display = "none";
    }, 3000);
    // stop the timer
    document.getElementById("time").innerHTML = totalTime;
    clearInterval(quizTimer);
    // If a user clicks submit, show the highscores page
    submitBtn.addEventListener("click", scoresPage);
};

// create initial input and submit button
var createSubmit = function () {
    // remove the start button
    document.getElementById("start-btn-box").style.display = "none";
    
    // create submit container
    var inputDiv = document.createElement("div");
    var textInput = document.createElement("input");
    var enterInitials = document.createElement("p");

    inputDiv.className = "input-div";
    enterInitials.className = "enter-initials";
    enterInitials.textContent = "Enter initials:";
    textInput.type = "text";
    textInput.className = "text-input";
    submitBtn.className = "submit-btn";
    submitBtn.textContent = "Submit";
    
    contentBox.appendChild(inputDiv);
    inputDiv.appendChild(enterInitials);
    inputDiv.appendChild(textInput);
    inputDiv.appendChild(submitBtn);
}

// show highscores page
var scoresPage = function () {
    // save the score
    var initialInput = document.querySelector(".text-input").value;
    localStorage.setItem(initialInput, totalTime);
    // chage the title
    title.textContent = "Highscores";
    // hide the submit container and result 
    contentBox.style.display = "none";
    result.style.display = "none";
    // create score list, go back button and clear highscores button
    var scoresDiv = document.createElement("div");
    var listDiv = document.createElement("div");
    var btnDiv = document.createElement("div");
    var scoresList = document.createElement("p");
    var goBackbtn = document.createElement("button")
    var clearScoresbtn = document.createElement("button");
    var highscores = localStorage.getItem(initialInput);
  
    listDiv.className = "list-div";
    btnDiv.className = "btn-div";
    scoresDiv.className = "highscores-box";
    scoresList.className = "highscores-list";
    goBackbtn.className = "go-back-btn";
    clearScoresbtn.className = "clear-highscores-btn";
  
    scoresList.textContent = "1. " + initialInput + " - " + highscores;
    goBackbtn.textContent = "Go Back";
    clearScoresbtn.textContent = "Clear Highscores";
  
    startBox.appendChild(scoresDiv);
    scoresDiv.appendChild(listDiv);
    scoresDiv.appendChild(btnDiv);
    listDiv.appendChild(scoresList);
    btnDiv.appendChild(goBackbtn);
    btnDiv.appendChild(clearScoresbtn);

    // If the go back button is clicked, go to the quiz start page
    goBackbtn.addEventListener("click", reload);

    // If the clear highscores button is clicked, remove the score list and the score saved in localstorage
    clearScoresbtn.addEventListener("click", function() {
        localStorage.removeItem(initialInput);
        listDiv.style.display = "none";
    })
}

// reload the page
var reload = function () {
    location.reload();
}

// If a user click the start button, quiz will start
startBtn.addEventListener("click", startQuiz);

