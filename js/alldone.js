//  define global variables

//var playerInitials = document.querySelector("#player-initials");
//var initials       = document.querySelector("#initials");
var submitBtn      = document.querySelector("#submit");

var intlInput      = document.querySelector("#intl-text");
var intlForm       = document.querySelector("#intl-form");
        
//  get player score from local storage

var player_score = localStorage.getItem("playerScore");
console.log(player_score);  //, "playerScore");

var plrScore = document.getElementById("plr-score");
plrScore.textContent = player_score;

// Add event listener to submit button
submitBtn.addEventListener("click", saveHighscore);

function saveHighscore () {

    var intlText        = intlInput.value.trim();
    var player_initials = intlText.toUpperCase();
    console.log("player initials: ", player_initials);

    //  get High Scores from local storage

    var data        = localStorage.getItem("highScores");

    if (!data) {
        // create new high_scores array
        var high_scores = [];
    } else {
        var high_scores = JSON.parse(data);
    }
    console.log(high_scores);
    //-----------------------------------------------------------------------------------------
    // search high_scores array for entry with current player initials.
    // if not found then add the new player object to the array, otherwise (it already exists)
    // so check scores and update player entry with new score if it is higher.
    // if array was updated then sort it by descending score value. 
    //------------------------------------------------------------------------------------------

    // search array for entry with current player initials

    var playerIndex = -1;
    var playerUpdated = false;
    high_scores.forEach(checkForPlayer);

    function checkForPlayer(hsEntry, index, array) {
        if (hsEntry.player === player_initials) {
            // current player already exists in high_scores array
            playerIndex = index;
            if (hsEntry.score < player_score) {
                // update player entry with new score if it is higher
                console.log("player high score updated");
                hsEntry.score = player_score;
                playerUpdated = true;
            }
        }
    }
    console.log("player index: ", playerIndex);

    if (playerIndex === -1) {
        // current player was not found in high_scores array, so add it
        console.log("current player is new");
        // create a new player-score object
        var newPlayerScore = new Player(player_initials, player_score);
        console.log("New player score obj: ", newPlayerScore);
        // Add new player score to high_scores array
        high_scores.push(newPlayerScore);
        playerUpdated = true;
    }

    if (playerUpdated && high_scores.length > 1) {
        // sort into descending high score sequence
        high_scores.sort(function(a, b){return b.score - a.score});
    }
    console.log(high_scores);

    // Save updated high scores array in local storage
    localStorage.setItem("highScores", JSON.stringify(high_scores));
    
    // transfer to 'Highscores' page
    window.location.href = "highscores.html";
}


// Constructor function for Player objects in High Scores array

function Player(initials, score) {
        this.player = initials;
        this.score  = score;
}
