"use strict";
//immutable variables below
//input box
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
// attempts left paragraph
const attemptsLeftEl = document.getElementById("attempts-left");

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
         restartBtnEl.disabled = false;
         attemptsLeftEl.innerText = `Would you like to try again?`;
        }else{
            submitBtnEl.disabled = true;
            restartBtnEl.disabled = false;
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
//restart function
function restartRender() {
    historyArr = [];
    userAttempt = 3;
    numberSelectorEl.value = "";
    resultOutputEl.innerText = "";
    currentGuessEl.innerText = "";
    computerGuessEl.innerText = "";
    guessHistoryEl.innerText = "";
    resultOutputEl.innerText = "";
    submitBtnEl.disabled = false;
    restartBtnEl.disabled = true;
    attemptsLeftEl.innerText = `Try to guess the computer's number within 3 tries!`
};
//submit button eventlistener below
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
//restart eventlistener below
 restartBtnEl.addEventListener("click", function() {
     restartRender();
 });