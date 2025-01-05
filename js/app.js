"use strict";

// constants for element tags below
// need constants for:
// count input box  TODO: use .value on this to display #
const numberSelectorEl = document.getElementById("guess-input");
// result
const resultOutputEl = document.getElementById("guess-message");
// your guess
const currentGuessEl = document.getElementById("current-guess");
// computer guess
const computerGuessEl = document.getElementById("computer-guess");
// guess history
const guessHistoryEl = document.getElementById("guess-history");
// restart button
const restartBtnEl = document.getElementById("restart-btn");
//submit button
const submitBtnEl = document.getElementById("submit-btn");
const attemptsLeftEl = document.getElementById("attempts-left");

// if there's enough time, fade background and hide display of everything except restart button, change text, and ask player if they want to restart

// mutable variables below
let historyArr = [];
let userAttempt = 3;

//functions below
function userNumSelect() {
    currentGuessEl.innerText = numberSelectorEl.value;
};

function computerNumber() {
    let randomNum = Math.random() * (1,9) + 1;
    computerGuessEl.innerText = Math.round(randomNum);
};

function results() {


    if(parseInt(currentGuessEl.innerText) > parseInt(computerGuessEl.innerText) && userAttempt > 1 ) {
         resultOutputEl.innerText = "too high";
         attemptsLeftEl.innerText = `You have ${userAttempt - 1} attempts left.`;
        }else if(parseInt(currentGuessEl.innerText) < parseInt(computerGuessEl.innerText) && userAttempt > 1) {
        resultOutputEl.innerText = "too low";
        attemptsLeftEl.innerText = `You have ${userAttempt - 1} attempts left.`;
        }else if(parseInt(currentGuessEl.innerText) === parseInt(computerGuessEl.innerText) && userAttempt >= 1){
         resultOutputEl.innerText = "You win!";
         submitBtnEl.disabled = true;
         attemptsLeftEl.innerText = `Would you like to try again?`;
        }else{
            submitBtnEl.disabled = true;
            resultOutputEl.innerText = "You have lost";
            attemptsLeftEl.innerText = `Would you like to try again?`;
        };
    };
function guessHistoryDisplay() {
        let userNumber = numberSelectorEl.value;
        historyArr.push(userNumber);
        guessHistoryEl.innerText = historyArr;
    };


//render function
function submitRender() {
    // guessAndResults();
    userNumSelect();
    computerNumber();
    results();
    guessHistoryDisplay()
    // triesLeft();
};

function restartRender() {

};
//eventlistener1 below
submitBtnEl.addEventListener("click", function(event) {
    // logic that checks for an acceptable input
    if( numberSelectorEl.value <= 0 || numberSelectorEl.value > 10) {
        alert(`please input a number 1-10`);
        event.preventDefault();
    }else{
        submitRender();
        userAttempt -=1;
    };
});
//eventlistener2 below
// restartBtnEl.addEventListener("click", function() {
//     restartRender();
// });


// user will select a number and hit the submit button. Then, result, both guesses will populate. guess history will show all attempts in the game. Once 3 attempts have been made, if user is unsuccessful the game will restart.
