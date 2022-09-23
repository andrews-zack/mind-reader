// Declaring objects attached to the various divs in html
let headerText = document.getElementById("header-Text");
let nextBtn = document.getElementById("next-Btn");
let helperText = document.getElementById("helper-Text");
let bottomBtn = document.getElementById("bottom-Btn");

// Declaring state object
let gameState = {
    // currentPage will be the object that determines what content is loaded/hidden/visible
    currentPage: 0,
    // screenPage object is an array containing all the values for the html elements on each page that loads
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
};

// Fisher Yates method to shuffle symbols in the array
function scrambleSym(symArr) {
    let arrLength = gameState.symArr.length;
    while (arrLength != 0) {
        randSym = Math.floor(Math.random() * arrLength);
        arrLength--;
        [gameState.symArr[arrLength], gameState.symArr[randSym]] = [gameState.symArr[randSym], gameState.symArr[arrLength]];
    }
    return symArr;
}

// The event listeners for content to load, and functions to run on button click
addEventListener('DOMContentLoaded', initGame);
nextBtn.addEventListener("click", updatePage);
bottomBtn.addEventListener("click", handleBottomClick);

// initGame loads page 1, creates my array of symbols and runs the scramble function, generates and sets values for number/symbol pairs
function initGame() {
    gameState.screenPage[5].helperText = "Your symbol is:  "
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
        pageArr = pageArr.concat(`${n} : ${bigArr[n]} <br>`);
    };
    gameState.screenPage[4].headerText = pageArr;
}

// We only want the bottom button to reset the game after the first page. If it's on the first page, the bottom button will advance the site to the next page
function handleBottomClick() {
    if (gameState.currentPage === 0) {
        updatePage();
    } else {
        resetGame();
    }
}

// Increments the currentPage object and populates the page with the correct content
function updatePage() {
    gameState.currentPage++;
    nextBtn.hidden = gameState.screenPage[gameState.currentPage].nextHide;
    headerText.innerHTML = gameState.screenPage[gameState.currentPage].headerText;
    nextBtn.innerHTML = gameState.screenPage[gameState.currentPage].nextBtn;
    helperText.innerHTML = gameState.screenPage[gameState.currentPage].helperText;
    bottomBtn.innerHTML = gameState.screenPage[gameState.currentPage].bottomBtn;
}

// Resets the page number and runs initGame to load the first page again
function resetGame() {
    gameState.currentPage = 0;
    initGame();
}
