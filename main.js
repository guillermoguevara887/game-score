let scoreLeft = document.getElementById("score-left");
let scoreRight = document.getElementById("score-right");
var scoreHome = 0;
var scoreGuest = 0;



function addOne() {
    scoreHome = scoreHome + 1;
    scoreLeft.textContent = +scoreHome;

}
function addTwo() {
    scoreHome = scoreHome + 2;
    scoreLeft.textContent = +scoreHome;

}
function addThree() {
    scoreHome = scoreHome + 3;
    scoreLeft.textContent = +scoreHome;

}
function addOneGuest() {
    scoreGuest = scoreGuest + 1;
    scoreRight.textContent = +scoreGuest;

}
function addTwoGuest() {
    scoreGuest = scoreGuest + 2;
    scoreRight.textContent = +scoreGuest;

}
function addThreeGuest() {
    scoreGuest = scoreGuest + 3;
    scoreRight.textContent = +scoreGuest;

}

function reset() {
    scoreHome = 0;
    scoreGuest = 0;
    scoreLeft.textContent = +scoreGuest;
    scoreRight.textContent = +scoreGuest;

}