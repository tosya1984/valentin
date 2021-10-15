document.querySelector("#a-main").addEventListener("click", function() {changePage("main")});
document.querySelector("#a-galery").addEventListener("click", function() {changePage("galery")});
document.querySelector("#a-services").addEventListener("click", function() {changePage("services")});
document.querySelector("#a-contacts").addEventListener("click", function() {changePage("contacts")});





function changePage(page) {
    document.querySelector("#div-main").style.display = "none";
    document.querySelector("#div-galery").style.display = "none";
    document.querySelector("#div-services").style.display = "none";
    document.querySelector("#div-contacts").style.display = "none";

    document.querySelector(`#div-${page}`).style.display = "block";
}

let number = 1;

function changeMainImage(number) {
    number++;
    if(number == 15) {
            number = 1;
    }
    console.log(document.querySelector(".img-slider-main").style.src);
    document.querySelector(".img-slider-main").src = `img/www/IMG_${number}.JPG`;
    setTimeout(changeMainImage, 3000, number);
}

setTimeout(changeMainImage, 3000, number);