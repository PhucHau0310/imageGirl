const slides = document.querySelector(".slides");
const slide_item = document.querySelectorAll(".slide");

let index = 0;

function next() {
    if (index < slide_item.length - 1) {
        index++;
    } else {
        index = 0;
    }
    slides.style.transform = `translateX(${index * -100}%)`;
}

function prev() {
    if (index === 0) {
        index = slide_item.length - 1;
    } else {
        index--;
    }
    slides.style.transform = `translateX(${index * -100}%)`;
}

setInterval(() => {
    next();
}, 2 * 1000);
