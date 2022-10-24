import { getElement } from "../utils.js";
const body = document.body;
const overlay = getElement(".cart-overlay");
const closeBtn = getElement(".cart-close");
const openBtn = getElement(".cart-toggle");

openBtn.addEventListener("click", () => {
    body.classList.add("noscroll");
    overlay.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
});

closeBtn.addEventListener("click", () => {
    body.classList.remove("noscroll");
    overlay.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
});