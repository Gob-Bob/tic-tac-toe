(function () {
    const redirect = () => {
        window.location = "https://github.com/Gob-Bob/tic-tac-toe"
    }
    const form = document.getElementById('playerForm')
    const button = document.getElementById('submitButton')
    button.addEventListener('click', () => {
        form.classList.add('animated')
        setTimeout(redirect, 1000)
    })
})()