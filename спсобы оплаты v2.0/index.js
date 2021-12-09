// // variables
// let open_pay = document.querySelectorAll('.container__pay');
// let container__popup = document.querySelector('#popup_first');
// let contents = document.querySelectorAll('[data-active-content]');
// let active_content = document.querySelectorAll('[data-active]')
// let close_button = document.querySelector('.image__close');
// let button_get = document.querySelector('#get__money');
// let second_content = document.querySelector('#popup_second');
// let button__profile =document.querySelector('#profile__update');

// // functions
// // open_pay.forEach((element) => {
// //     element.addEventListener('click', (event) => {
// //         event.preventDefault();
// //         const target = event.currentTarget;
// //         const content = document.querySelector(`[data-active="${target.dataset.active}"]`)
// //         content.classList.add('show')
// //     })
// // })

// container__popup.addEventListener('click', (event) => {
//     event.preventDefault();
//     container__popup.classList.toggle('show')
// })

// contents.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         const target = event.currentTarget;
//         const content = document.querySelector(`[data-active="${target.dataset.active}"]`)
//         content.classList.add('show')
//     })
// })

// // close_button.addEventListener('click', () => {
// //     container__popup.classList.toggle('show')
// // })

// // button_get.addEventListener('click', (event) => {
// //     event.preventDefault();
// //     container__popup.classList.remove('show')
// //     second_content.classList.add('show');
// // })

// // second_content.addEventListener('click', () => {
// //     second_content.classList.toggle('show')
// // })

// // button__profile.addEventListener('click', (event) => {
// //     event.preventDefault();
// // })


let open__pay = document.querySelectorAll('.container__pay')
let contents = document.querySelectorAll('[data-active-content]')
let active = document.querySelectorAll('[data-active]')
let popup = document.querySelector('#popup');
let close_button = document.querySelectorAll('.image__close');

popup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.toggle('show')
})

close_button.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('show');
    })
})

contents.forEach((element) => {
    element.classList.add('display_none')
    element.addEventListener('click', (event) => {
        event.stopPropagation();
    })
})

open__pay.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        popup.classList.add('show')
        const target = event.currentTarget;
        const content = document.querySelector(`[data-active-content="${target.dataset.active}"]`);
        contents.forEach((element) => {
            element.classList.add('display_none')
        })
        content.classList.remove('display_none')
    })
})