(function () {
    const redirect = () => {
        window.location = "http://127.0.0.1:5500/tic-tac-toe/04_game/game.html"
    }
    const form = document.getElementById('playerForm')
    const button = document.getElementById('submitButton')
    button.addEventListener('click', () => {
        form.classList.add('animated')
        setTimeout(redirect, 1000)
    })
})()