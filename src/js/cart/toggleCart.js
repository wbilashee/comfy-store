import { getElement } from "../utils.js";
const body = document.body;
const overlay = getElement(".cart-overlay");
const closeBtn = getElement(".cart-close");
const openBtn = getElement(".cart-toggle");

const openCart = () => {
    body.classList.add("noscroll");
    overlay.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
}

openBtn.addEventListener("click", openCart);

closeBtn.addEventListener("click", () => {
    body.classList.remove("noscroll");
    overlay.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
});

export { openCart };