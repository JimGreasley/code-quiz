# code-quiz


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
The player will be prompted to enter their initials which will be saved, along with their score, z 


## Link
 https://jimgreasley.github.io/code-quiz/