//HAMBURGER

document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("header").classList.toggle("active");
});


//CAROUSEL

const prev = document.getElementById("prevSlide");
const next = document.getElementById("nextSlide");
let slideIndex = 1;
showSlides(slideIndex);


function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".carousel__slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let slide of slides) {
        slide.classList.remove("visible");
    }

    slides[slideIndex-1].classList.add("visible");

}



[prev, next].forEach((button) => {
    button.addEventListener("click", () => {
       button.id === "prevSlide" && moveSlides(-1);
       button.id === "nextSlide" && moveSlides(1);
    });
});


