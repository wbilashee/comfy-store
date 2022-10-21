const body = document.body;
const navbar = document.querySelector(".navbar");
const fadeElems = document.querySelectorAll(".has-fade");
const closeBtn = document.querySelector(".close-btn");
const btnHamburger = document.querySelector("#btn-hamburger");

const toggleNavbar = () => {
    if (navbar.classList.contains("open")) {
        body.classList.remove("noscroll");
        navbar.classList.remove("open");
        fadeElems.forEach(elem => {
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        });
    } else {
        body.classList.add("noscroll");
        navbar.classList.add("open");
        fadeElems.forEach(elem => {
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        });
    }
}

btnHamburger.addEventListener("click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);