let headerText = document.getElementById("header-Text");
let nextBtn = document.getElementById("next-Btn");
let helperText = document.getElementById("helper-Text");
let bottomBtn = document.getElementById("bottom-Btn");


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
            helperText: `Ex: 14 - 5 = 9 click next to proceed`,
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "",
            nextBtn: "REVEAL",
            helperText: "Find your new number. Note the symbol beside the number",
            bottomBtn: "RESET",
            nextHide: false,
        },
        {
            headerText: "",
            nextBtn: "REVEAL",
            helperText: "Your symbol is: ",
            bottomBtn: "RESET",
            nextHide: true,
        }
    ],
    currentPage: 0,
};

// Fisher Yates method
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
    gameState.screenPage[5].helperText = "Your symbol is: "
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.hidden = gameState.screenPage[gameState.currentPage].nextHide;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
    gameState.symArr = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
    scrambleSym();
    gameState.screenPage[5].headerText = gameState.symArr[0];
    gameState.screenPage[5].helperText += gameState.symArr[0];
    let bigArr = [];
    let pageArr = [];
    for (let i = 1; i <= 11; i++) {
        bigArr = bigArr.concat(gameState.symArr);
    };
    
    for (let i = 0; i <= 81; i++) {
        let n = i;
        pageArr = pageArr.concat(`${n} : ${bigArr[n]}`);
    };
    gameState.screenPage[4].headerText = pageArr;
}

function handleBottomClick() {
    if (gameState.currentPage === 0) {
        updatePage();
    } else {
        resetGame();
    }
}

bottomBtn.addEventListener("click", handleBottomClick);

function updatePage() {
    gameState.currentPage++;
    nextBtn.hidden = gameState.screenPage[gameState.currentPage].nextHide;
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.innerHTML = gameState.screenPage[gameState.currentPage].nextBtn;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
}

function resetGame() {
    gameState.currentPage = 0;
    initGame();
}
