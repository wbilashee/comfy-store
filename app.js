import "./src/js/navbarToggle.js";
import { getElement } from "./src/js/utils.js";
import fetchProducts from "./src/js/fetchProducts.js";
import { setupStore, store } from "./src/js/store.js";
import displayProducts from "./src/js/displayProducts.js";

const init = async () => {
    const products = await fetchProducts();

    if (products) {
        setupStore(products);
        const featured = store.filter(product => product.featured === true);
        displayProducts(featured, getElement(".featured-products"));
    }
}

window.addEventListener("DOMContentLoaded", init);