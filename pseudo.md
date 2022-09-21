# Mind Reader
The mind reader game leads the user through a math trick by initially having them pick a number and follow steps on various pages. At the end of the game we will have "predicted" their number.

## OBJ/Var
* gameState - object containing everything that will show up on the screen for each page
    - screenPage - array object containing objects(6) of objects for the html elements on the page at a certain time
        * headerText - string
        * nextBtn - string
        * helpText - string
        * bottomBtn - string
    - currentPage - number - used for calling next index to update page
    - symArr - array - housing symbols to be used in game
    - randSym - array - symbols after being passed through randomize function
    - answerSym - string - holds answer symbol

## FUNC
* initGame() - calls up values to populate html elements for page 1
* updatePage() - called on button click to change html elements to next page, increments page number
* scrambleSym() - randomizes symArr, runs loop to populate symbols for numbers 0-99 and stores it in randSym. Stores answerSym
* resetGame() - attached to button, runs initGame()

## PROCEDURE

WHEN a user loads the page
    initGame runs and loads screenPage elements into html for currentPage 1
    scrambleSym runs and creates and stores rndSym from symArr
                stores answerSym

IF user clicks on bottomBtn
    updatePage runs and removes current html content and replaces it with screenPage content for currentPage 2,
    (changes bottomBtn text value)
    increments currentPage value

IF user clicks on nextBtn
    updatePage runs and removes current html content and replaces it with screenPage content for currentPage 3
    increments currentPage value

IF user clicks on nextBtn
    updatePage runs and removes current html content and replaces it with screenPage content for currentPage 4
    increments currentPage value

IF user clicks on nextBtn
    updatePage runs and removes current html content and replaces it with screenPage content for currentPage 5
    (populates headerText with randSym, changes nextBtn text value)
    increments currentPage value

IF user clicks on nextBtn
    updatePage runs and removes current html content and replaces it with screenPage content for currentPage 6
    (populates headerText with answerSym, hides nextBtn)

IF user clicks on bottomBtn
    resetGame runs initGame and loads screenPage content for currentPage 1
