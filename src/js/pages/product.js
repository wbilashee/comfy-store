import "../navbarToggle.js";
import { getElement } from "../utils.js";
import { findProduct } from "../store.js";

const init = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const product = await findProduct(id);
    const { title, image, company, price } = product;

    document.title = `${title} | Comfy`;
    const titleDOM = getElement(".title");
    const loading = getElement(".page-loading");
    const productImage = getElement(".single-product-img");
    const productTitle = getElement(".single-product-title");
    const productPrice = getElement(".single-product-price");
    const productCompany = getElement(".single-product-company");

    titleDOM.textContent = title;
    productImage.src = `${image}`;
    productTitle.textContent = title;
    productPrice.textContent = `$${price}`;
    productCompany.textContent = `by ${company}`;
    loading.style.display = "none";
}

window.addEventListener("DOMContentLoaded", init);