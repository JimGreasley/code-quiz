// define Global variables

var startBtn  = document.querySelector("#start-quiz");
var timeLeft  = document.querySelector("#time-left");

var sqBtn      = document.getElementById("start-quiz");
var h4El       = document.getElementById("qtn-area"); 
var choiceList = document.getElementById("choice-list");
var feedBack   = document.getElementById("feedback");


// define variables containing each question, the correct answer (number), and four choices available
var question_1 = ["Commonly used data types DO NOT include:", 3, "strings", "booleans", "alerts", "numbers"];
var question_2 = ["The condition in an if/else statement is enclosed within___.", 2, "quotes", "parentheses","curly brackets", "square brackets"];
var question_3 = ["Arrays in JavaScript can be used to store___.", 4, "numbers and strings", "other arrays", "booleans", "all of the above"];
var question_4 = ["String values must be enclosed within__ when being assigned to variables.", 3, "commas", "curly brackets", "quotes", "parentheses"];
var question_5 = ["A very useful tool used during development and debugging for printing content to the debugger is:", 4, "javascript", "terminal/bash", "for loops", "console.log"];

var correct_selection = 0;
var player_score = 0;
var secondsLeft = 75;
var question_no = 0;
var timerInterval;


//var high_scores = [ {player: "ABC", score: 42}, {player: "XYZ", score: 53} ];
// testing: save High Score array in local storage
// localStorage.removeItem("highScores");

//var high_scores = [];
//localStorage.setItem("highScores", JSON.stringify(high_scores));

// testing: dump array of player high score objects
// for (let i = 0; i < high_scores.length; i++) {
//   var hi_score = high_scores[i];
//   console.log("Player " + hi_score.player + " high score: ", hi_score.score);
// }


// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);



function startQuiz () {

  setTimer("start");

  console.log("starting questions");

// Set the body to a variable
//    var body = document.body;

  question_no = 1;

  // hide the 'Start Quiz' buttom
  sqBtn.style.display = "none";

  // Pose the first question
  poseQuestion(question_1);

}


// When a element inside of the todoList is clicked...
choiceList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its selection-no value
    var selection = element.getAttribute("selection-no");

    console.log("selection no: ", selection);

    if (selection == correct_selection) {
       console.log("correct");
       feedBack.textContent = "Correct!";
    } else {
        console.log("wrong, 10 sec deducted from ", secondsLeft);
        secondsLeft -= 10;
        console.log(secondsLeft);
        feedBack.textContent = "Wrong!";
    }
    // pause for 500 milliseconds
    setTimeout(pause, 2500);

    // ready for next question
    question_no++;
    
    if (question_no === 2)  {
      poseQuestion(question_2);
    }
    else if (question_no === 3)  {
      poseQuestion(question_3);
    }
    else if (question_no === 4)  {
      poseQuestion(question_4);
    }
    else if (question_no === 5)  {
      poseQuestion(question_2);
    } 
    else {
      player_score = secondsLeft;
      console.log("Player score is: ", player_score);
      clearInterval(timerInterval);
    // save current players score in local storage ["playerScore"]
    //  localStorage.setItem("playerScore", JSON.stringify(player_score));
      localStorage.setItem("playerScore", player_score);
    // transfer to "All Done" page and allow them to input their initials
      window.location.href = "alldone.html";
    // their initials and highest score will be saved in an object{highScores} in local storage
    }    
    
  }

});


function poseQuestion(qtnArray) {

  // Clear choiceList element
  choiceList.innerHTML = "";

  // populate the question
  h4El.textContent = qtnArray[0];

  // save the number of the correct selection
  correct_selection = qtnArray[1];
  console.log("correct selection is: ", correct_selection);

  // populate the multiple choice answers 

  for (let i = 2; i < 6; i++) {
    var choice = qtnArray[i];

    // create a button to hold the current (i) multiple choice answer
    var button = document.createElement("button");
    var nbr = i - 1;

    button.textContent = nbr + ". " + choice; 
 
    button.setAttribute("selection-no", nbr);

    // add next answer button to choice list
    choiceList.appendChild(button);

  }

}


function setTimer() {

  console.log("start countdown"); 
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
//      sendMessage();
      console.log("time's up");
    }
  }, 1000);  
}


function pause() {
  return;
}

/*
function sendMessage() {
  console.log("time's up");
//
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
//
}
*/