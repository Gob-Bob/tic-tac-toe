(function () {
    const redirect = () => {
        window.location = "http://127.0.0.1:5500/tic-tac-toe/03_player_2/player_2.html"
    }
    const form = document.getElementById('playerForm')
    const button = document.getElementById('submitButton')
    button.addEventListener('click', () => {
        form.classList.add('animated')
        setTimeout(redirect, 1000)
    })
})()