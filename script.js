// Assignment Code
var startBtn = document.querySelector("#start-quiz");
var timeLeft = document.querySelector("#time-left");

var choiceList = document.getElementById("choice-list");

// define variables containing each question, the correct answer (number), and four choices available
var question_1 = ["Which is not an HTML element?", 3, "1. <head> ", "2. <body> ", "3. <widget>", "4. <p>   "];
var question_2 = ["Which is not a component of a webpage?", 3, "1. HTML  ", "2. JavaScript", "3. CSS    ", "4. COBOL "];

var correct_selection = 0;
var secondsLeft = 25;

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);




function startQuiz () {

  setTimer();

  console.log("starting questions");

// Set the body to a variable
//    var body = document.body;
  
  var sqBtn = document.getElementById("start-quiz");
  var h4El = document.getElementById("qtn-area"); 
//  var choiceList = document.getElementById("choice-list");

  var question_no = 0;

  sqBtn.style.display = "none";

  do {

    // Clear choiceist element
    choiceList.innerHTML = "";

    // capture the question
    h4El.textContent = question_1[0];

    //save the number of the correct selection
    correct_selection = question_1[1];
    console.log("correct selection is: ", correct_selection);
   
    // capture the mutiple choice answers 
    loadAnswers(question_1, choiceList);

    question_no++;

  } while (question_no < 2);

  var player_score = secondsLeft;
  console.log("Player score is: ", player_score);
  
 // clearInterval(timerInterval);

}

// When a element inside of the todoList is clicked...
choiceList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its selection-no value
    var selection = element.getAttribute("selection-no");

    console.log("selection no: ", selection);

    if (selection === correct_selection) {
       console.log("correct");
    } else {
        console.log("wrong, 10 sec deducted from ", secondsLeft);
        secondsLeft -= 10;
        console.log(secondsLeft);
    }
  }
});




function loadAnswers(qtnArray, answerList) {

//  var h4El = document.getElementById("qtn-area"); 
// load question
// h4El.textContent = qtnArray[0];

  // Display next possible choice for 
  for (var i = 2; i < 6; i++) {
    var choice = qtnArray[i];

//    var li = document.createElement("li");
//    li.textContent = choice;
//    li.setAttribute("selection-no", i);

    var button = document.createElement("button");
    button.textContent = choice;   //"Complete";
 //   li.appendChild(button);
    button.setAttribute("selection-no", i - 1);

//    answerList.appendChild(li);
    answerList.appendChild(button);
  }
}


function setTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  console.log("time's up");
/*  
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
*/

}