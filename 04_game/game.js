const playerTemplate = (playerNum, playerName) => {
    if (playerNum == 1) {
        playerSym = 'X'
    } else {
        playerSym = 'O'
    }
    return {playerNum, playerSym, playerName}
}

const gameBoardMod = (function() {
    
    // Set up player 1
    const playerOneName = document.getElementById('player-one-name')
    const playerOneDisplayName = document.getElementById('player-one-display-name')
    const playerOneForm = document.getElementById('player-one-form')
    const playerOneButton = document.getElementById('player-one-submit-button')
    playerOneButton.addEventListener('click', () => {
        playerOneForm.classList.add('animated')
        playerOneDisplayName.textContent = playerOneName.value
        playerOneDisplayName.classList.add('second-wrapper-animated')
        const playerOne = playerTemplate(1, playerOneName.value)
        console.log(playerOne.playerSym)
    })
    // Set up player 2
    const playerTwoName = document.getElementById('player-two-name')
    const playerTwoDisplayName = document.getElementById('player-two-display-name')
    const playerTwoForm = document.getElementById('player-two-form')
    const playerTwoButton = document.getElementById('player-two-submit-button')
    playerTwoButton.addEventListener('click', () => {
        playerTwoForm.classList.add('animated')
        playerTwoDisplayName.textContent = playerTwoName.value
        playerTwoDisplayName.classList.add('second-wrapper-animated')
        const playerTwo = playerTemplate(2, playerTwoName.value)
        console.log(playerTwo.playerSym)
    })

    const boardObj = {
        boardArray: ['', '', '', '', '', '', '', '', '']
        // Check win function
            // Check for horizontal wins
            // Check for vertical wins
            // Check for diagonal wins
            // Check for a draw
    }

    const boardDOM = document.getElementById('game_grid_container')
    const renderBoard = (function(array) {
        // For each item in the board, 
            // Create a button and insert the name of the element into the button's textContent
            // Add it to the button wrapper HTML element
        array.forEach(item => {
            const boardSlot = document.createElement('button')
            boardSlot.textContent = item
            boardSlot.classList.add('game_slot')
            boardDOM.appendChild(boardSlot)
        })
    })(boardObj.boardArray)

    let count = 0
    const getPlayerTurn = () => {
        // Alternates between even and odd to determine playerOne or playerTwo's turn
        if (count % 2 == 0) {
            return 1
        } else {
            return 2
        }
    }
    
    const getPlayerName = (playerCounterInput) => {
        // Check getPlayerTurn
        // Return player's name property depending if even or odd
    }

    // getPlayerSymbol function
        // Check getPlayerTurn
        // Return player's symbol property depending if even or odd
    
    // playerPlaceMove function (playerSymbol, positionIndex, array)
        // Place playerSymbol into game spot using positionIndex
        // Place within board array

    const playerPlaceMove = (slot, position) => {
        // If position is blank, place player symbol
        if (slot == '') {
            console.log(playerOne.playerSym)
            // Switch to next player's turn
            count++
        }
        // Otherwise don't do anything and allow the player to place in diferent spot
        
    }
            
    const gameSlots = document.querySelectorAll('.game_slot')
    gameSlots.forEach((slot, position) => {
        let content = slot.textContent
        slot.addEventListener('click', () => {
            playerPlaceMove(content, position)
            // Access the gameboard method to check for a win
            // Rerender the board to update moves onto the DOM (renderBoard function)
        })
    })
})()