const homeScoreEl = document.getElementById("homescore-el")
const guestScoreEl = document.getElementById("guestscore-el")
const periodEl = document.getElementById("period-el")
let homeScore = 0;
let guestScore = 0;

function addleft(){
    homeScore +=1;
    homeScoreEl.textContent = homeScore;
}
function minusleft(){
    homeScore -= 1;
    homeScoreEl.textContent = homeScore;
}

function addright(){
    guestScore +=1;
    guestScoreEl.textContent = guestScore;
}
function minusright(){
    guestScore -= 1;
    guestScoreEl.textContent = guestScore;
}