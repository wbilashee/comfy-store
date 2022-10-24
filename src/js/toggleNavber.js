import { getElement } from "./utils.js";
const body = document.body;
const navbar = getElement(".navbar");
const closeBtn = getElement(".close-btn");
const openBtn = getElement(".navbar-toggle");
const fadeElems = navbar.querySelectorAll(".has-fade");

openBtn.addEventListener("click", () => {
    body.classList.add("noscroll");
    navbar.classList.add("open");
    fadeElems.forEach(elem => {
        elem.classList.remove("fade-out");
        elem.classList.add("fade-in");
    });
});

closeBtn.addEventListener("click", () => {
    body.classList.remove("noscroll");
    navbar.classList.remove("open");
    fadeElems.forEach(elem => {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
    });
});