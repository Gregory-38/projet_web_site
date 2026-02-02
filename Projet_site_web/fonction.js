function sliderRight() {
    let carousel = document.getElementById("c");
    let slides = document.getElementsByClassName("slide");
    if (carousel.scrollLeft >= ((slides.length - 1) * 1700)) {
        carousel.scrollLeft = 0;
    } else {
        carousel.scrollLeft += 1700;
    }
}

function sliderLeft() {
    let carousel = document.getElementById("c");
    let slides = document.getElementsByClassName("slide");
    if (carousel.scrollLeft == 0) {
        carousel.scrollLeft = (slides.length - 1) * 1700;
    } else {
        carousel.scrollLeft -= 1700;
    }
}