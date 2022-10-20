import toggleNavbar from "./src/js/navbarToggle.js";
const closeBtn = document.querySelector(".close-btn");
const btnHamburger = document.querySelector("#btn-hamburger");
btnHamburger.addEventListener("click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);