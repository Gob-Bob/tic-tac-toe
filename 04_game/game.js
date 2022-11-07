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
    let playerOne = playerTemplate(1)
    const playerOneName = document.getElementById('player-one-name')
    const playerOneDisplayName = document.getElementById('player-one-display-name')
    const playerOneForm = document.getElementById('player-one-form')
    const playerOneButton = document.getElementById('player-one-submit-button')
    playerOneButton.addEventListener('click', () => {
        playerOneForm.classList.add('animated')
        playerOneDisplayName.textContent = playerOneName.value
        playerOneDisplayName.classList.add('second-wrapper-animated')
        playerOne = playerTemplate(1, playerOneName.value)
    })
    // Set up player 2
    let playerTwo = playerTemplate(2)
    const playerTwoName = document.getElementById('player-two-name')
    const playerTwoDisplayName = document.getElementById('player-two-display-name')
    const playerTwoForm = document.getElementById('player-two-form')
    const playerTwoButton = document.getElementById('player-two-submit-button')
    playerTwoButton.addEventListener('click', () => {
        playerTwoForm.classList.add('animated')
        playerTwoDisplayName.textContent = playerTwoName.value
        playerTwoDisplayName.classList.add('second-wrapper-animated')
        playerTwo = playerTemplate(2, playerTwoName.value)
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
        array.forEach(item => {
            const boardSlot = document.createElement('button')
            boardSlot.textContent = item
            boardSlot.classList.add('game_slot')
            boardDOM.appendChild(boardSlot)
        })
    })(boardObj.boardArray)

    let count = 0
    const getPlayerTurn = () => {
        if (count % 2 == 0) {
            return playerOne.playerSym
        } else {
            return playerTwo.playerSym
        }
    }

    const playerPlaceMove = (slot, position) => {
        if (slot.textContent == '') {
            slot.textContent = getPlayerTurn()
            // Function adds player's symbol into appropriate spot in array
            // Clear the DOM of the old board
            // Run board render function to update
            count++
        }
    }
            
    const gameSlots = document.querySelectorAll('.game_slot')
    gameSlots.forEach((slot, position) => {
        slot.addEventListener('click', () => {
            playerPlaceMove(slot, position)
            // Access the gameboard method to check for a win
            // Rerender the board to update moves onto the DOM (renderBoard function)
        })
    })
})()