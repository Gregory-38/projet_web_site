function sliderRight() {
    let carousel = document.getElementById("c");
    let scroll = carousel.scrollLeft;
    console.log(scroll);
    carousel.scrollTo({
        left: scroll + 1700,
        top: 0,
        behavior: "smooth"
    });

}

function sliderLeft() {
    let carousel = document.getElementById("c");
    let scroll = carousel.scrollLeft;
    console.log(scroll);
    carousel.scrollTo({
        left: scroll - 1700,
        top: 0,
        behavior: "smooth"
    });
}