(function () {
    const redirect = () => {
        window.location = "https://www.google.com/"
    }
    const title = document.getElementById('title')
    const button = document.getElementById('startButton')
    button.addEventListener('click', () => {
        button.classList.add('buttonAnimated')
        title.classList.add('titleAnimated')
        setTimeout(redirect, 1000)
    })
})()