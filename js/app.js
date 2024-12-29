"use strict";

// constants for element tags below
// need constants for:
// count input box  TODO: use .value on this to display #
const numberSelectorEl = document.getElementById("guess-input");
// result
const resultOutputEl = document.getElementById("current-guess");
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

//functions below
function userNumSelect() {
    resultOutputEl.innerText = numberSelectorEl.value;
};

function computerNumber() {
    let randomNum = Math.random() * (1,9) + 1;
    ComputerGuessEl.innerText = Math.round(randomNum);
};

function guessHistoryDisplay() {
        // needs to display three attempts
        // idk how to do that :'(
        // create empty array
        //when btn is pressed push user guess in
        //display to span
};

//render function
function submitRender() {
    userNumSelect();
    computerNumber();
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

