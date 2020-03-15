$(document).ready(function () {
    $('.current-offers__slider').slick();
});

function kitcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
  
    text = text.slice(0, limit);
    return text.trim() + " ...";
}

let windowWidth = document.documentElement.clientWidth;


// Обрезаем текст на мобильниках
if (windowWidth <= 500) {
    let texts = document.querySelectorAll('.current-offers__text');

    for (let item of texts) {
        let text = item.textContent;
        let limit = 150;

        let paste = kitcut(text, limit);
        
        item.innerHTML = paste;
    }
}
