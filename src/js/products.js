import "./navbarToggle.js";
import fetchProducts from "./fetchProducts.js";
import displayProducts from "./displayProducts.js";

const container = document.querySelector("#products");

const init = async () => {
    const products = await fetchProducts();

    if (products) {
        displayProducts(products, container);
    }
}

init();