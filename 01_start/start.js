(function () {
    const redirect = () => {
        window.location = "http://127.0.0.1:5500/tic-tac-toe/02_name/name.html"
    }
    const title = document.getElementById('title')
    const button = document.getElementById('startButton')
    button.addEventListener('click', () => {
        button.classList.add('buttonAnimated')
        title.classList.add('titleAnimated')
        setTimeout(redirect, 1000)
    })
})()