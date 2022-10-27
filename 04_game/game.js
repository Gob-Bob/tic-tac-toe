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

    const gameButtons = document.querySelectorAll(".game_button")
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            playerMove = checkCountStatus(count)
            checkSpace(button)
            addMoves(gameButtons)
            compareArrays(totalMovesArray, newMovesArray)
            console.log(totalMovesArray)
        })
    })

    const restartButton = document.getElementById("restart_button")
    restartButton.addEventListener('click', () => {
        clearAllMoves(gameButtons)
        console.log(totalMovesArray)
    })

})()