const playerTemplate = (playerNum, playerName) => {
    if (playerNum == 1) {
        playerSym = 'X'
    } else {
        playerSym = 'O'
    }
    return {playerNum, playerSym, playerName}
}

const gameBoardMod = (function() {
    
    const checkBothPlayerNames = (playerOneName, playerTwoName) => {
        if (playerOneName == '' || playerTwoName == '') {
            window.alert('Input player names.')
            return false
        }
        return true
    }

    let firstButtonClicked = false
    let secondButtonClicked = false

    // Set up player 1
    let playerOne = playerTemplate(1)
    const playerOneName = document.getElementById('player-one-name')
    const playerOneDisplayName = document.getElementById('player-one-display-name')
    const playerOneForm = document.getElementById('player-one-form')
    const playerOneButton = document.getElementById('player-one-submit-button')
    playerOneDisplayName.textContent = '.'
    playerOneButton.addEventListener('click', () => {
        if (checkBothPlayerNames(playerOneName.value, playerTwoName.value)) {
            playerOneForm.classList.add('animated')
            playerOneDisplayName.textContent = playerOneName.value
            playerOneDisplayName.classList.add('second-wrapper-animated')
            playerOne = playerTemplate(1, playerOneName.value)
            playerOneNameDOM.style.backgroundColor = "gray"
            firstButtonClicked = true
            if (firstButtonClicked && secondButtonClicked) {
                render()
            }
        }
    })

    // Set up player 2
    let playerTwo = playerTemplate(2)
    const playerTwoName = document.getElementById('player-two-name')
    const playerTwoDisplayName = document.getElementById('player-two-display-name')
    const playerTwoForm = document.getElementById('player-two-form')
    const playerTwoButton = document.getElementById('player-two-submit-button')
    playerTwoDisplayName.textContent = ''
    playerTwoButton.addEventListener('click', () => {
        if (checkBothPlayerNames(playerOneName.value, playerTwoName.value)) {
            playerTwoForm.classList.add('animated')
            playerTwoDisplayName.textContent = playerTwoName.value
            playerTwoDisplayName.classList.add('second-wrapper-animated')
            playerTwo = playerTemplate(2, playerTwoName.value)
            secondButtonClicked = true
            if (firstButtonClicked && secondButtonClicked) {
                render()
            }
        }
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

    const updateWinnerDOM = (player) => {
        const winnerDOM = document.createElement('div')
        winnerDOM.classList.add('winner')
        winnerDOM.textContent = "Winner!"
        player.appendChild(winnerDOM)
    }
    const updateDrawDOM = (playerOne, playerTwo) => {
        const drawDOMOne = document.createElement('div')
        const drawDOMTwo = document.createElement('div')
        drawDOMOne.classList.add('draw')
        drawDOMTwo.classList.add('draw')
        drawDOMOne.textContent = "Draw"
        drawDOMTwo.textContent = "Draw"
        playerOne.appendChild(drawDOMOne)
        playerTwo.appendChild(drawDOMTwo)
    }
    const disableGameSlots = () => {
        const gameSlots = document.querySelectorAll('.game_slot')
        gameSlots.forEach((slot) => {
            slot.disabled = true
        })
    }

    const checkWin = (array) => {
        const playerOneDOM = document.getElementById('player-one-display-name')
        const playerTwoDOM = document.getElementById('player-two-display-name')
        if (draw(array)) {
            updateDrawDOM(playerOneDOM, playerTwoDOM)
            disableGameSlots()
            playerOneDOM.style.backgroundColor = "white"
            playerTwoDOM.style.backgroundColor = "white"
            return true
        } else if (horizontalMatch(array) == 'xWin' || verticalMatch(array) == 'xWin' || diagonalMatch(array) == 'xWin') {
            updateWinnerDOM(playerOneDOM)
            disableGameSlots()
            playerOneDOM.style.backgroundColor = "white"
            playerTwoDOM.style.backgroundColor = "white"
            return true
        } else if (horizontalMatch(array) == 'oWin' || verticalMatch(array) == 'oWin' || diagonalMatch(array) == 'oWin') {
            updateWinnerDOM(playerTwoDOM)
            disableGameSlots()
            playerOneDOM.style.backgroundColor = "white"
            playerTwoDOM.style.backgroundColor = "white"
            return true
        }
        return false
    }

    const boardDOM = document.getElementById('game_grid_container')

    const removeChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
    
    const render = () => {

        removeChildNodes(boardDOM)
        boardArray.forEach(element => {
            const button = document.createElement('button')
            button.textContent = element
            button.classList.add('game_slot')
            boardDOM.appendChild(button)

        })

        const gameSlots = document.querySelectorAll('.game_slot')
        gameSlots.forEach((slot, index) => {
            slot.addEventListener('click', () => {
                if (!checkWin(boardArray)) {
                    playerPlaceMove(boardArray, index, count)
                    checkWin(boardArray)
                }
            })
        })
    }

    const restartButton = (() => {
        const button = document.getElementById('restart_button')
        button.addEventListener('click', () => {
            window.location.reload()
        })
    })()

    let count = 0
    const playerOneNameDOM = document.getElementById('player-one-display-name')
    const playerTwoNameDOM = document.getElementById('player-two-display-name')
    const getPlayerSymbol = (num, playerOne, playerTwo, playerOneDOM, playerTwoDOM) => {
        if (num % 2 == 0) {
            playerOneDOM.style.backgroundColor = "white"
            playerTwoDOM.style.backgroundColor = "gray"
            return playerOne
        } else {
            playerTwoDOM.style.backgroundColor = "white"
            playerOneDOM.style.backgroundColor = "gray"
            return playerTwo
        }
    }

    const playerPlaceMove = (array, index, num) => {
        if (array[index] == '') {
            array[index] = getPlayerSymbol(num, playerOne.playerSym, playerTwo.playerSym, playerOneNameDOM, playerTwoNameDOM)
        }
        count++
        render()
    }

})()