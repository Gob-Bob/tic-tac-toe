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

    const checkSpace = (space) => {
        if (space.textContent == "") {
            space.textContent = playerMove
            count++ 
        }
    }

    const gameButtons = document.querySelectorAll(".game_button")
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            playerMove = checkCountStatus(count)
            console.log(playerMove)
            checkSpace(button)
        })
    })
})()