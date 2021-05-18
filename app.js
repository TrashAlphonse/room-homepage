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

    // HERO CONTENT

    const heroContent = [
        {
            title: "Discover innovative ways to decorate",
            text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            title: "We are available all across the globe",
            text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            title: "Manufactured with the best materials",
            text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ];

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
    document.getElementById("heroTitle").innerHTML = heroContent[slideIndex-1].title;
    document.getElementById("heroText").innerHTML = heroContent[slideIndex-1].text;

}



[prev, next].forEach((button) => {
    button.addEventListener("click", () => {
       button.id === "prevSlide" && moveSlides(-1);
       button.id === "nextSlide" && moveSlides(1);
    });
});


