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
const ComputerGuessEl = document.getElementById("computer-guess");
// guess history
const guessHistoryEl = document.getElementById("guess-history");
// restart button
const restartBtnEl = document.getElementById("restart-btn");
//submit button
const submitBtnEl = document.getElementById("submit-btn");

// if there's enough time, fade background and hide display of everything except restart button, change text, and ask player if they want to restart

// mutable variables below
let historyArr = [];
let userAttempt = 0

//functions below
function userNumSelect() {
    currentGuessEl.innerText = numberSelectorEl.value;
};

function computerNumber() {
    let randomNum = Math.random() * (1,9) + 1;
    ComputerGuessEl.innerText = Math.round(randomNum);
};

function results() {  // returns wrong when comp. # is 10
    if(currentGuessEl.innerText > ComputerGuessEl.innerText ) {
        return resultOutputEl.innerText = "too high";
        }else if(currentGuessEl.innerText < ComputerGuessEl.innerText) {
        return resultOutputEl.innerText = "too low";
        }else{
        return resultOutputEl.innerText = "correct!";
        };
};
function guessHistoryDisplay() {
        let userNumber = numberSelectorEl.value;
        historyArr.push(userNumber);
        return guessHistoryEl.innerText = historyArr;
};

function gameOver () {
    if(userAttempt === 3){
        //reset counter to 0
        //display some end game message
        // enable restart button
        //once user restarts game
    };
};

//render function
function submitRender() {
    // guessAndResults();
    userNumSelect();
    computerNumber();
    results();
    guessHistoryDisplay()
};

function restartRender() {

};
//eventlistener1 below
submitBtnEl.addEventListener("click", function() {
    submitRender();
});
//eventlistener2 below
restartBtnEl.addEventListener("click", function() {
    restartRender();
});


// user will select a number and hit the submit button. Then, result, both guesses will populate. guess history will show all attempts in the game. Once 3 attempts have been made, if user is unsuccessful the game will restart.

