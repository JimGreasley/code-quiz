// Assignment Code
var startBtn = document.querySelector("#start-quiz");
var timeLeft = document.querySelector("#time-left");

// define variables containing each question, the correct answer (number), and four choices available
var question_1 = ["Which is not an HTML element?", 3, "<head>", "<body>", "<widget>", "<p>"]

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);




function startQuiz () {
  var secondsLeft = 15;
  setTimer(secondsLeft);

  console.log("starting questions");
  /*
  var question_no = 0;
  do {
    var 
  } while (question_no < 1);
*/
}


function setTimer(secLeft) {
  var timerInterval = setInterval(function() {
    secLeft--;
    timeLeft.textContent = secLeft;

    if(secLeft === 0) {
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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ------------------------------------------------
// function to create password based on user input
// ------------------------------------------------
function generatePassword() {
  // -----------------------------------------------------
  // clear previous password; code below doesn't work
  // -----------------------------------------------------

  // document.getElementById('passwrod').innerHTML = " ";

  // -------------------------------------------------------------------------------------
  // get desired length of password from user - must be greater than 7 and less than 129
  // -------------------------------------------------------------------------------------
  do {
    var  pswd_length = prompt("Please enter length (between 8 and 128) of password to be created."); 
    if (pswd_length < 8 || pswd_length > 128) {
       alert("Invalid password length, must be greater than 7 and less than 129 characters, please re-enter");
       keep_looping = true;
    } 
    else {
      keep_looping = false;
    }
  }
  while (keep_looping);

  

  console.log(use_lowercase, use_uppercase, use_numeric, use_special);
  // ---------------------------------------------------
  // create a new password based on the user's criteria
  // ---------------------------------------------------
  // initialize new pswd to empty string
    var new_password = "";
  //  define next char to be appended to pswd
    var next_char;
  // create new password by appending characters until we have reached the user's desired length
    for (let i = 0; i < pswd_length; i++) {
      // call function to get next eligible character based on user's criteria
      next_char = nextChar(use_lowercase, use_uppercase, use_numeric, use_special);
      new_password = new_password + next_char;
    }
    console.log(new_password);
    return new_password;
}





