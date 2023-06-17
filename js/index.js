const toggleTheme = document.querySelector('#button')

const container = document.querySelector('.main__container-light')
const title = document.querySelector('.main__container-light_text-light')
const button = document.querySelector('.main__container-light_button-light')

function enableDarkMode() {
    // Remove styles
    document.body.classList.remove('light-theme')
    container.classList.remove('main__container-light')
    title.classList.remove('main__container-light_text-light')
    button.classList.remove('main__container-light_button-light')

    // Add new styles
    document.body.classList.add('dark-theme')
    container.classList.add('main__container-dark')
    title.classList.add('main__container-dark_text-dark')
    button.classList.add('main__container-dark_button-dark')

    //Remove old title and add new title
    title.innerHTML = ''
    title.innerHTML += 'Click to choose light theme🤍'
}

function enableLightMode() {
    // Remove styles
    document.body.classList.remove('dark-theme')
    container.classList.remove('main__container-dark')
    title.classList.remove('main__container-dark_text-dark')
    button.classList.remove('main__container-dark_button-dark')

    // Add new styles
    document.body.classList.add('light-theme')
    container.classList.add('main__container-light')
    title.classList.add('main__container-light_text-light')
    button.classList.add('main__container-light_button-light')
    
    //Remove old title and add new title
    title.innerHTML = ''
    title.innerHTML += 'Click to choose dark theme🖤'
}

toggleTheme.addEventListener('click', () => {
    document.body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode()
})