let headerText = document.getElementById("header-Text");
let nextBtn = document.getElementById("next-Btn");
let helperText = document.getElementById("helper-Text");
let bottomBtn = document.getElementById("bottom-Btn");

// let symArr = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
// let answerSym = `${gameState.symArr[0]}`;

let gameState = {
    screenPage: [
        {
            headerText: "I can read your mind",
            nextBtn: "NEXT",
            helperText: "",
            bottomBtn: "GO",
            nextHide: true,
        },
        {
            headerText: "Pick a number from 01-99",
            nextBtn: "NEXT",
            helperText: "When you have your number click NEXT",
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "Add both digits together to get a new number",
            nextBtn: "NEXT",
            helperText: "Ex: 14 is 1 + 4 = 5 click NEXT to proceed",
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "Subtract your new number from the original number",
            nextBtn: "NEXT",
            helperText: " Ex: 14 - 5 = 9 click next to proceed",
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "${symArr}",
            nextBtn: "REVEAL",
            helperText: "Find your new number. Note the symbol beside the number",
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "${answerSym}",
            nextBtn: "REVEAL",
            helperText: "Your symbol is: ${answerSym}",
            bottomBtn: "RESET",
            nextHide: true,
        }
    ],
    currentPage: 0,
    symArr: ["!", "@", "#", "$", "%", "^", "&", "*", "~"],
    answerSym: "${gameState.symArr[0]}"
};



function scrambleSym(symArr) {
    let arrLength = gameState.symArr.length;
    while (arrLength != 0) {
        randSym = Math.floor(Math.random() * arrLength);
        arrLength--;
        [gameState.symArr[arrLength], gameState.symArr[randSym]] = [gameState.symArr[randSym], gameState.symArr[arrLength]];
    }
    return symArr;
}

addEventListener('DOMContentLoaded', initGame);
nextBtn.addEventListener("click", updatePage);

function initGame() {
    // gameState.currentPage = 0
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.hidden = gameState.screenPage[gameState.currentPage].nextHide;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
    // gameState.currentPage += 1;
    bottomBtn.addEventListener("click", () => {
        updatePage();
    });
}

function updatePage() {
    gameState.currentPage++;
    nextBtn.hidden = gameState.screenPage[gameState.currentPage].nextHide;
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.innerHTML = gameState.screenPage[gameState.currentPage].nextBtn;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
    bottomBtn.addEventListener("click", () => {
        resetGame();
    });
}

nextBtn.addEventListener("click", updatePage);

/*
nextBtn.addEventListener("click", () => {
    updatePage();
});
*/

function resetGame() {
    gameState.currentPage = 0;
    initGame();
}
