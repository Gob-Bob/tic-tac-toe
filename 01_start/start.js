(function () {
    const redirect = () => {
        window.location = "https://www.google.com/"
    }
    const button = document.getElementById('startButton')
    button.addEventListener('click', () => {
        button.classList.add('animated')
        setTimeout(redirect, 1000)
    })
})()