import "./src/js/navbarToggle.js";
import fetchProducts from "./src/js/fetchProducts.js";
import displayProducts from "./src/js/displayProducts.js";
const container = document.querySelector(".featured-products");

const init = async () => {
    const products = await fetchProducts();

    if (products) {
        const featured = products.filter(product => product.featured === true);
        displayProducts(featured, container);
    }
}

init();