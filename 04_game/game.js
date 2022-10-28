(function () {
    const checkCountStatus = (variable) => {
        if (variable % 2 == 0) {
            return "X"
        } else {
            return "O"
        }
    }

    let playerMove
    let count = 0
    let totalMovesArray = ["","","","","","","","",""]
    let newMovesArray = []
    
    const compareArrays = (totalArray, newArray) => {
        // Iterate through each slot in each array and compare 
        for (let i = 0; i < totalArray.length; i++) {
            // If current element in newArray differs from totalArray's 
            //      ^(a player placed a move)
            //      Copy newArray's textcontent into totalArray's element position
            if (newArray[i] == "X" || newArray[i] == "O") {
                totalArray[i] = newArray[i]
            }
            // Does current newArray position = totalArray's slot in same position? 
            //      ^ (Are they both empty?)
            // If so, iterate to the next position
        }
        // After iterating through the entire array, erase all elements in newArray
        newArray.splice(0)
    }

    const checkSpace = (space) => {
        if (space.textContent == "") {
            space.textContent = playerMove
            count++ 
        }
    }

    const addMoves = (node) => {
        node.forEach((space) => {
            newMovesArray.push(space.textContent)
        })

    }

    const clearAllMoves = (node) => {
        node.forEach((space) => {
            space.textContent = ""
        })
        totalMovesArray = ["","","","","","","","",""]
    }

    let moveCounter = 0
    let moveSymbol = ""
    const checkForWinner = () => {
        // Iterate through every space in totalMovesArray
        for (let i = 0; i < totalMovesArray.length; i++) {
            // If counting variable hits 3
            if (moveCounter == 3) {
                // , declare the winner
                return console.log(`${moveSymbol} player is the winner!`)
            }
            // If a player move is encountered
            if (totalMovesArray[i] != "") {
                // If the move is the same as what is stored in memory
                if (totalMovesArray[i] == moveSymbol) {
                    // , add a count
                    moveCounter++
                }
                // If the move is NOT the same as what is stored in memory
                else {
                    // , reset counter to 1 and store new move into memory variable
                    moveCounter = 1
                    moveSymbol = totalMovesArray[i]
                }
            }
        }
    }

    const gameButtons = document.querySelectorAll(".game_button")
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            playerMove = checkCountStatus(count)
            checkSpace(button)
            addMoves(gameButtons)
            compareArrays(totalMovesArray, newMovesArray)
            checkForWinner()
            console.log(totalMovesArray)
        })
    })

    const restartButton = document.getElementById("restart_button")
    restartButton.addEventListener('click', () => {
        clearAllMoves(gameButtons)
        console.log(totalMovesArray)
    })
})()