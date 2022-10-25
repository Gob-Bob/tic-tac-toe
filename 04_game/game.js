(function () {
    const checkCountStatus = (variable) => {
        if (variable % 2 == 0) {
            return "X"
        } else {
            return "O"
        }
    }
    
    let count = 0
    const gameButtons = document.querySelectorAll(".game_button")
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(checkCountStatus(count))
            count++
        })
    })
})()