var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses" 
    },
    {
      title: "The external javascript file must contain the <script> tag.",
      choices: ["true", "false", "truthy", "falsy"],
      answer: "false" 
    },
    {
      title: "How do yo write an if statement in Javascript?",
      choices: ["if i = 5", "if (i == 5)", "if (i = 5) then", "if == 5 then"],
      answer: "if (i == 5)"
    },
    {
      title: "How does a for loop start?",
      choices: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1-5"],
      answer: "for (i = 0; i <= 5; i++)"
    },
  ];

var question = document.querySelector("#question"); //question.title
var answerA = document.querySelector("#answerA"); // question.choices[0]
var answerB = document.querySelector("#answerB"); //quesytion.choices[1]
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var inCorrect = document.querySelector("#correct");

var timer = document.getElementById("time-count");
var count = 90;

var next = document.querySelector("#next");
var nextIndex = 1;

var score = 0


function playtime() {
    var countDown = setInterval(function() {
        count--;
        timer.textContent = "Time: " + count;

        if (count <= 0) {
        clearInterval(countDown);
        window.location.href="save_score.html";
        }

    }, 1000);

};

onpageshow = function () {
  question.textContent = questions[0].title;
  answerA.textContent = questions[0].choices[0];
  answerB.textContent = questions[0].choices[1];
  answerC.textContent = questions[0].choices[2];
  answerD.textContent = questions[0].choices[3];

}

// doesnt work, needs to apply to each question: 

document.onclick=function(){
  var clicker = window.event.srcElement.id;
  if(clicker == "answerC"){
    inCorrect.textContent = "Correct";
    score++
    console.log(score)
    next.onclick = function() {
      nextIndex = (nextIndex+1)%(questions.length);
      question.textContent = questions[1].title;
      answerA.textContent = questions[1].choices[0];
      answerB.textContent = questions[1].choices[1];
      answerC.textContent = questions[1].choices[2];
      answerD.textContent = questions[1].choices[3];
      
      inCorrect.textContent = "";    
    } 
  }
  else if ( clicker == "answerA" || clicker == "answerB" || clicker == "answerD" ){
    inCorrect.textContent = "Incorrect";
    if (count >= 15) {count = count - 15};
    timer.textContent = "Time: " + count;
  }
  else {
    inCorrect.textContent = "";
  }
};






playtime()

