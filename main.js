let headerText = document.getElementById("header-Text");
let nextBtn = document.getElementById("next-Btn");
let helperText = document.getElementById("helper-Text");
let bottomBtn = document.getElementById("bottom-Btn");

const newVariable = "new variable";

const gameState = {
    screenPage: [
        {
            headerText: "I can read your mind",
            nextBtn: "none",
            helperText: "",
            bottomBtn: "GO"
        },
        {
            headerText: "Pick a number from 01-99",
            nextBtn: "NEXT",
            helperText: "When you have your number click NEXT",
            bottomBtn: "RESET"
        },
        {
            headerText: "Add both digits together to get a new number",
            nextBtn: "NEXT",
            helperText: "Ex: 14 is 1 + 4 = 5 click NEXT to proceed",
            bottomBtn: "RESET"
        },
        {
            headerText: "Subtract your new number from the original number",
            nextBtn: "NEXT",
            helperText: " Ex: 14 - 5 = 9 click next to proceed",
            bottomBtn: "RESET"
        },
        {
            headerText: "${randSym}",
            nextBtn: "REVEAL",
            helperText: "Find your new number. Note the symbol beside the number",
            bottomBtn: "RESET"
        },
        {
            headerText: "${answerSym}",
            nextBtn: "none",
            helperText: "Your symbol is: ${answerSym}",
            bottomBtn: "RESET"
        }
    ],
    currentPage: 0,
    symArr: ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"],
    // answerSym: ""
};

function initGame() {
    gameState.currentPage = 0
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.style.display = gameState.screenPage[gameState.currentPage].nextBtn;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
    gameState.currentPage += 1;
}

addEventListener('DOMContentLoaded', initGame);

function updatePage() {
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.innerHTML = gameState.screenPage[gameState.currentPage].nextBtn;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
    gameState.currentPage += 1;
}

/*
if (bottomBtn.textContent === "GO") {
    bottomBtn.addEventListener('click', updatePage);
}   else {
    bottomBtn.addEventListener('click', initGame);
}


bottomBtn.addEventListener('click', (e) => {
    if (bottomBtn.textContent === "GO") {
        updatePage;
    } else {
        initGame;
    }
 */
