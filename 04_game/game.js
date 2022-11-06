// playerFactory (template for creating player objects)
    // Need to be able to pull player name data from previous pages
    // Use those names pulled from other JS files to create new players in factory
    // Player number property
    // Player symbol property

const playerTemplate = (playerNum, playerName) => {
    if (playerNum == 1) {
        playerSym = 'X'
    } else {
        playerSym = 'O'
    }
    return {playerNum, playerSym, playerName}
}

const gameBoardMod = (function() {

    const playerOneName = document.getElementById('player-one-name')
    const playerOneDisplayName = document.getElementById('player-one-display-name')
    const playerOneForm = document.getElementById('player-one-form')
    const playerOneButton = document.getElementById('player-one-submit-button')
    playerOneButton.addEventListener('click', () => {
        playerOneForm.classList.add('animated')
        playerOneDisplayName.textContent = playerOneName.value
        playerOneDisplayName.classList.add('second-wrapper-animated')
    })
    const playerTwoName = document.getElementById('player-two-name')
    const playerTwoDisplayName = document.getElementById('player-two-display-name')
    const playerTwoForm = document.getElementById('player-two-form')
    const playerTwoButton = document.getElementById('player-two-submit-button')
    playerTwoButton.addEventListener('click', () => {
        playerTwoForm.classList.add('animated')
        playerTwoDisplayName.textContent = playerTwoName.value
        playerTwoDisplayName.classList.add('second-wrapper-animated')
    })

    const playerOne = playerTemplate(1)
    const playerTwo = playerTemplate(2)
    
    const boardObj = {
        board: ['', '', '', '', '', '', '', '', '']
        // Check win function
            // Check for horizontal wins
            // Check for vertical wins
            // Check for diagonal wins
            // Check for a draw
    }
    const renderBoard = (function() {
        // For each item in the board, 
            // Create a button and insert the name of the element into the button's textContent
            // Add it to the button wrapper HTML element
    })()

    // playerSwitchCounter function
        // Alternates between even and odd to determine playerOne or playerTwo's turn
    
    // currentPlayerName function
        // Check playerSwitchCounter
        // Return player's name property depending if even or odd
    
    // currentPlayerSymbol function
        // Check playerSwitchCounter
        // Return player's symbol property depending if even or odd
    
    // playerPlaceMove function (playerSymbol, positionIndex, array)
        // Place playerSymbol into game spot using positionIndex
        // Place within board array

    // playerMoveChecklist function (positionIndex)
        // Run currentPlayerName and store within variable
        // Run currentPlayerSymbol and store within variable

        // If positionIndex has a symbol, don't do anything
            // Otherwise allow the player to place their symbol (playerPlaceMove)

    // Iterates through each button and add an event listener
        // Within the event listener, run the playerMoveChecklist function
        // Access the gameboard method to check for a win
        // Rerender the board to update moves onto the DOM (renderBoard function)
    })()