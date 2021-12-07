// variables
let contents = document.querySelectorAll('[data-content]')
let popup_content = document.querySelector('#content')
let counter = 1;

contents.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        popup_content.classList.toggle('display_none')
    })
})