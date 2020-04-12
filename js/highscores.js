var goBackBtn           = document.querySelector("#go-back");
var clearHighScoresBtn  = document.querySelector("#clear-HS");
var highScoreList       = document.querySelector("#hs-list");

           
//  get High Scores from local storage

var hi_score    = {};
var data        = localStorage.getItem("highScores");
var high_scores = JSON.parse(data);
console.log(high_scores);

// testing: dump array of player high score objects

for (let i = 0; i < high_scores.length; i++) {
    hi_score = high_scores[i];
    console.log("Player " + hi_score.player + " high score: ", hi_score.score);
    loadhighScoreList(hi_score, i);
 }


//---------------------------------------------------------------------------------------------
// create buttons dynamically so they "float" underneath the high scores list
//---------------------------------------------------------------------------------------------

var newRow  = document.createElement("div");
newRow.setAttribute("class", "row justify-content-center mt-2"); 

var newBtn1  = document.createElement("button");
 
newBtn1.setAttribute("id", "go-back");
newBtn1.setAttribute("class", "col-2 mt-2 mx-2");
//newCol1.setAttribute("class", "col-2 border border-dark");
newBtn1.textContent  = "Go Back";
newRow.appendChild(newBtn1);

var newBtn2  = document.createElement("button");
 
newBtn2.setAttribute("id", "clear-HS");
newBtn2.setAttribute("class", "col-2 mt-2 mx-2");
//newCol1.setAttribute("class", "col-2 border border-dark");
newBtn2.textContent  = "Clear Highscores";
newRow.appendChild(newBtn2);

highScoreList.appendChild(newRow);

var goBackBtn           = document.querySelector("#go-back");
var clearHighScoresBtn  = document.querySelector("#clear-HS");
//-----------------------------------------------------------------------------------


// Add event listener to Go Back button
goBackBtn.addEventListener("click", goBack);

// Add event listener to submit button
clearHighScoresBtn.addEventListener("click", clearHiScores);


//-----------------------------------------------------------------------------------
//  function to load a High Score to the High Scores list
//-----------------------------------------------------------------------------------

function loadhighScoreList(hiScore, i) {

// create a new table row    
   var newTableRow  = document.createElement("div");
   newTableRow.setAttribute("class", "row justify-content-center mt-2"); 
   //newTableRow.setAttribute("class", "row text-center"); 

   var row_no = i + 1;

   var col_text = row_no + ".  " + hiScore.player + "  -  " + hiScore.score;

   //newTableRow.textContent  = row_text;

   var newTblCol  = document.createElement("div");
   newTblCol.setAttribute("class", "col-2 border border-dark"); 
   newTblCol.textContent  = col_text;

   highScoreList.appendChild(newTableRow);
   newTableRow.appendChild(newTblCol);

}

//-----------------------------------------------------------------------------------
//  function to go back to the start page
//-----------------------------------------------------------------------------------        

function goBack() {
  // transfer to main (start) main 
     window.location.href = "index.html";
}

//-----------------------------------------------------------------------------------
//  function to clear out the High Scores list
//-----------------------------------------------------------------------------------

function clearHiScores() {

  // remove highScores data from local storage
     localStorage.removeItem("highScores");

  // initalize an empty high_scores array and save it to locate storage
     var high_scores = [];
     localStorage.setItem("highScores", JSON.stringify(high_scores));

  // reload this page  
     window.location.href = "highscores.html";
}
