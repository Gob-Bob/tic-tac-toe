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
    playerOneDisplayName.textContent = '.'
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
    playerTwoDisplayName.textContent = ''
    playerTwoButton.addEventListener('click', () => {
        playerTwoForm.classList.add('animated')
        playerTwoDisplayName.textContent = playerTwoName.value
        playerTwoDisplayName.classList.add('second-wrapper-animated')
        playerTwo = playerTemplate(2, playerTwoName.value)
    })

    let boardArray = ['', '', '', '', '', '', '', '', '']

    const horizontalMatch = (array) => {
        if (array[0] == 'X' && array[1] == 'X' && array[2] == 'X') {
            return 'xWin'
        } else if (array[3] == 'X' && array[4] == 'X' && array[5] == 'X') {
            return 'xWin'
        } else if (array[6] == 'X' && array[7] == 'X' && array[8] == 'X') {
            return 'xWin'
        }
        if (array[0] == 'O' && array[1] == 'O' && array[2] == 'O') {
            return 'oWin'
        } else if (array[3] == 'O' && array[4] == 'O' && array[5] == 'O') {
            return 'oWin'
        } else if (array[6] == 'O' && array[7] == 'O' && array[8] == 'O') {
            return 'oWin'
        }
    }
    
    const verticalMatch = (array) => {
        if (array[0] == 'X' && array[3] == 'X' && array[6] == 'X') {
            return 'xWin'
        } else if (array[1] == 'X' && array[4] == 'X' && array[7] == 'X') {
            return 'xWin'
        } else if (array[2] == 'X' && array[5] == 'X' && array[8] == 'X') {
            return 'xWin'
        }
        if (array[0] == 'O' && array[3] == 'O' && array[6] == 'O') {
            return 'oWin'
        } else if (array[1] == 'O' && array[4] == 'O' && array[7] == 'O') {
            return 'oWin'
        } else if (array[2] == 'O' && array[5] == 'O' && array[8] == 'O') {
            return 'oWin'
        }
    }

    const diagonalMatch = (array) => {
        if (array[0] == 'X' && array[4] == 'X' && array[8] == 'X') {
            return 'xWin'
        } else if (array[2] == 'X' && array[4] == 'X' && array[6] == 'X') {
            return 'xWin'
        } 
        if (array[0] == 'O' && array[4] == 'O' && array[8] == 'O') {
            return 'oWin'
        } else if (array[2] == 'O' && array[4] == 'O' && array[6] == 'O') {
            return 'oWin'
        } 
    }

    const draw = array => {
        let count = 9
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 'X' || array[i] == 'O') {
                count--
            }
            if (count == 0) {
                return true
            }
        }
    }

    const checkWin = (array) => {
        if (draw(array)) {
            console.log('Draw')
        } else if (horizontalMatch(array) == 'xWin' || verticalMatch(array) == 'xWin' || diagonalMatch(array) == 'xWin') {
            console.log('Player 1 Winner')
        } else if (horizontalMatch(array) == 'oWin' || verticalMatch(array) == 'oWin' || diagonalMatch(array) == 'oWin') {
            console.log('Player 2 Winner')
        }
    }

    const boardDOM = document.getElementById('game_grid_container')

    const removeChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
    
    const board = boardArray
    const render = () => {

        removeChildNodes(boardDOM)
        board.forEach(element => {
            const button = document.createElement('button')
            button.textContent = element
            button.classList.add('game_slot')
            boardDOM.appendChild(button)

        })

        const gameSlots = document.querySelectorAll('.game_slot')
        gameSlots.forEach((slot, index) => {
            slot.addEventListener('click', () => {
                playerPlaceMove(boardArray, index, count)
                checkWin(boardArray)
            })
        })

    }
    render()

    let count = 0
    const getPlayerSymbol = (num) => {
        if (num % 2 == 0) {
            return playerOne.playerSym
        } else {
            return playerTwo.playerSym
        }
    }

    const playerPlaceMove = (array, index, num) => {
        if (array[index] == '') {
            array[index] = getPlayerSymbol(num)
        }
        render()
        count++
    }
})()