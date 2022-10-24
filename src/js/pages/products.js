import "../toggleNavber.js";
import "../cart/toggleCart.js";
import setupCompanies from "../filters/companies.js";
import setupSearch from "../filters/search.js";
import setupPrice from "../filters/price.js";
import { getElement } from "../utils.js";
import { setupStore, store } from "../store.js";
import fetchProducts from "../fetchProducts.js";
import displayProducts from "../displayProducts.js";

const init = async () => {
    const loading = getElement(".page-loading");

    if (store.length < 1) {
        const products = await fetchProducts();
        setupStore(products);
    }
    displayProducts(store, getElement("#products"));

    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
    loading.style.display = "none";
}

init();