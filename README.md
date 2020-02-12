# code-quiz

I believe most, if not all, the functionality is working.
However, the look/style is very rough - it's all over the place.
I ran out of time to make it look good.
If I get a chance I will work to correct the deficiences (based on the reviewer's feedback) and improve my grade. 

## Algorithm

When the index.html is initially launched the Welcome 'screen' will be displayed (Welcome banner and text with a submit button).
A click on the Submit button ("Start Quiz") will trigger the start of the quiz.

The Timer will start initially at 75 seconds and count down to zero.
The current Question number will be initialized to 1.

While the Timer is greater than zero and there are more questions to be asked: 
  * the next question will be displayed, along with its four choices, awaiting the player's selection
  * the choice clicked on will be compared to the correct answer:
    - if the player's choice is correct a "Correct!" message will be displayed
      otherwise a "Wrong!" message will be displayed and the timer will be reduced by 10 seconds
  * the current Question number will be incremented by 1.

If the Timer is zero or there are no more questions the quiz is over.
If there are no more questions the Timer is stopped.
The Timer's count becomes the player's score which is displayed on the "All Done" 'screen'.
The player will be prompted to enter their initials which will be saved, along with their score, 
in a High Scores array in local storage.
The 'High Scores' page is used to display the scores of various players and to optionally clear
out the High Scores array.


## Link
 https://jimgreasley.github.io/code-quiz/