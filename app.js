const input = document.querySelector('.textInput')
const content = document.querySelector('.content')

content.textContent = input.value

input.addEventListener('input', (event) => {
    content.textContent = event.target.value
})
