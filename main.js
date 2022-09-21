let headerText = document.getElementById("header-Text");
let nextBtn = document.getElementById("next-Btn");
let helperText = document.getElementById("helper-Text");
let bottomBtn = document.getElementById("bottom-Btn");

const gameState = {
    screenPage: [
        {
            headerText: "I can read your mind",
            nextBtn: "",
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
            headerText: `${randSym}`,
            nextBtn: "REVEAL",
            helperText: "Find your new number. Note the symbol beside the number",
            bottomBtn: "RESET"
        },
        {
            headerText: `${answerSym}`,
            nextBtn: "",
            helperText: `Your symbol is: ${answerSym}`,
            bottomBtn: "RESET"
        }
    ],
    currentPage: 0,
    symArr: ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"],
    answerSym: ""
};
