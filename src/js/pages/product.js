import "../toggleNavber.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import { getElement } from "../utils.js";
import { findProduct } from "../store.js";
import { addToCart } from "../cart/setupCart.js";

let productID;
const titleDOM = getElement(".title");
const cartBtn = getElement(".add-to-cart");
const loading = getElement(".page-loading");
const productImage = getElement(".single-product-img");
const productTitle = getElement(".single-product-title");
const productPrice = getElement(".single-product-price");
const productCompany = getElement(".single-product-company");

const init = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const product = await findProduct(id);
    const { title, image, company, price } = product;

    productID = id;
    document.title = `${title} | Comfy`;
    titleDOM.textContent = title;
    productImage.src = `${image}`;
    productTitle.textContent = title;
    productPrice.textContent = `$${price}`;
    productCompany.textContent = `by ${company}`;
    loading.style.display = "none";
}

cartBtn.addEventListener("click", () => {
    addToCart(productID);
});

window.addEventListener("DOMContentLoaded", init);