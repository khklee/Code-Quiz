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
        questionFive: "A very useful tool used during development and debugging for printing content to the debugger is",
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

// hide quiz container
document.getElementById("quiz-box").style.display = "none";

// hide result container 
document.getElementById("quiz-result").style.display = "none";

// set start button
var startBtn = document.querySelector("#start-btn");


// when start quiz button is clicked, quiz will start
var startQuiz = function() {
    // hide start container
    hideStartBox();

    // show quiz container
    document.getElementById("quiz-box").style.display = "block";

    // set timer
    setInterval(quizTimer, 1000);
        var quizTimer = setInterval(function() {
            totalTime = totalTime - 1;
            if (totalTime < 0) {
                clearInterval(totalTime);
            }
            else if (wrongEl()) {
                totalTime = totalTime - 15;
            }
            else {
                document.getElementById("time").innerHTML = totalTime;
            }
        }, 1000);
    
    firstQuestEl();
};

// first question and answer
var firstQuestEl = function() {
    // If a user gets a correct answer for the first question, go to the second question. 
    var answerClicked = false
    console.log("in 1stQ");
    document.getElementById("op3").addEventListener("click", function() {
        answerClicked = true;
        console.log("in op3 instener");

        if (answerClicked == true) {
            console.log("in 1stQ if");

            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show correct answer result
            correctEl();
            // present the third question and options
            secondQuestEl();
        }
    })

    // If a user gets a wrong answer for the first question, go to second question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        console.log("in op1, 2, or 4 instener");

        if (true) {
            console.log("in op1, 2, or 4 instener if");

            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[0].questionTwo;
            // show answer options
            answer1.textContent = questions[0].optionA;
            answer2.textContent = questions[0].optionB;
            answer3.textContent = questions[0].optionC;
            answer4.textContent = questions[0].optionD;
            // show wrong answer result
            wrongEl();
            // subtract from the clock
            // totalTime = totalTime - 15;
            // present the third question and options
            secondQuestEl();
        }
    }))
    
};

// second question and answer
var secondQuestEl = function() {    
    // If a user gets a correct answer for the second question, go to the third question. 
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[1].questionThree;
            // show answer options
            answer1.textContent = questions[1].optionA;
            answer2.textContent = questions[1].optionB;
            answer3.textContent = questions[1].optionC;
            answer4.textContent = questions[1].optionD;
            // show correct
            correctEl();
            // present the fourth question and options
            thirdQuestEl();
        }
    })
    // If a user gets a wrong answer for the second question, go to the third question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[1].questionThree;
            // show answer options
            answer1.textContent = questions[1].optionA;
            answer2.textContent = questions[1].optionB;
            answer3.textContent = questions[1].optionC;
            answer4.textContent = questions[1].optionD;
            // show wrong answer result
            wrongEl();
            // subtract from the clock
            // totalTime = totalTime - 15;
            // present the fourth question and options
            thirdQuestEl();
        }
        
    }))
};

// third question and answer
var thirdQuestEl = function() {    
    // If a user gets a correct answer for the third question, go to the fourth question. 
    document.getElementById("op4").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[2].questionFour;
            // show answer options
            answer1.textContent = questions[2].optionA;
            answer2.textContent = questions[2].optionB;
            answer3.textContent = questions[2].optionC;
            answer4.textContent = questions[2].optionD;
            // show correct result
            correctEl();
            // present the fifth question and options
            fourthQuestEl();
            
        }
    })
    // If a user gets a wrong answer for the third question, go to the fourth question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op3").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[2].questionFour;
            // show answer options
            answer1.textContent = questions[2].optionA;
            answer2.textContent = questions[2].optionB;
            answer3.textContent = questions[2].optionC;
            answer4.textContent = questions[2].optionD;
            // show wrong answer result
            wrongEl();
            // subtract from the clock
            // totalTime = totalTime - 15;
            // present the fifth question and options
            fourthQuestEl();
        }
        
    }))
};

// fourth question and answer
var fourthQuestEl = function() {    
    // If a user gets a correct answer for the fourth question, go to the fifth question. 
    document.getElementById("op3").addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[3].questionFive;
            // show answer options
            answer1.textContent = questions[3].optionA;
            answer2.textContent = questions[3].optionB;
            answer3.textContent = questions[3].optionC;
            answer4.textContent = questions[3].optionD;
            // show correct result
            correctEl();
            // present the fifth question and options
            fifthQuestEl();
        }
    })
    // If a user gets a wrong answer for the fourth question, go to the fifth question and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op4").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            // show the next question 
            var quizQuestion = document.getElementById("question");
            quizQuestion.textContent = questions[3].questionFive;
            // show answer options
            answer1.textContent = questions[3].optionA;
            answer2.textContent = questions[3].optionB;
            answer3.textContent = questions[3].optionC;
            answer4.textContent = questions[3].optionD;
            // show wrong answer result
            wrongEl();
            // subtract from the clock
            // totalTime = totalTime - 15;
            // present the fifth question and options
            fifthQuestEl();
        }
        
    }))
};

// fifth question and answer
var fifthQuestEl = function() {    
    // If a user gets a correct answer for the fifth question, go to 'all done' page. 
    document.getElementById("op4").addEventListener("click", function() {
        if (answerClicked = true) {
            correctEl();
            endPage();
        }   
    })

    // If a user gets a wrong answer for the fifth question, go to 'all done' page and subtract from the clock.
    document.querySelectorAll("#op1, #op2, #op3").forEach(el => el.addEventListener("click", function() {
        if (answerClicked = true) {
            wrongEl();
            endPage();
            // totalTime = totalTime - 15;
        }
    }))
};

// hide start container
var hideStartBox = function() {
    var startBox = document.getElementById("start-box");
    if (startBox.style.display === "none") {
        startBox.style.display = "flex";
    }
    else {
        startBox.style.display = "none";
    }
};

// show result container
var correctEl = function () {
    var correct = document.getElementById("correct");
    document.getElementById("quiz-result").style.display = "block";
    correct.textContent = "Correct!";
};
   
var wrongEl = function () {
    var correct = document.getElementById("correct");
    document.getElementById("quiz-result").style.display = "block";
    correct.textContent = "Wrong!";
};

var endPage = function () {
    document.getElementById("quiz-box").style.display = "none";
    // show start container
    document.getElementById("start-box").style.display = "flex";
    var endTtile = document.getElementById("title");
    endTtile.textContent = "All done!";
    // show the final score
    var scoreDescription = document.getElementById("how-to");
    scoreDescription.textContent = "Your final score is" + ".";
    // change the start button to submit
    createSubmit();

    clearInterval(totalTime);
    
};

var createSubmit = function () {
    var startBtnDiv = document.getElementById("start-btn-box");
    startBtnDiv.remove();
    var startBox = document.getElementById("start-box");    
    var inputDiv = document.createElement("div");
    var textInput = document.createElement("input");
    var enterInitials = document.createElement("p");
    var submitBtn = document.createElement("button")
    inputDiv.className = "input-div";
    enterInitials.className = "enter-initials";
    enterInitials.textContent = "Enter initials:";
    textInput.type = "text";
    textInput.className = "text-input";
    submitBtn.className = "submit-btn";
    submitBtn.textContent = "Submit";
    
    startBox.appendChild(inputDiv);
    inputDiv.appendChild(enterInitials);
    inputDiv.appendChild(textInput);
    inputDiv.appendChild(submitBtn);
    
}


startBtn.addEventListener("click", startQuiz);
