import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter");
    const priceValue = getElement(".price-value");

    let maxPrice = store.map(product => product.price);
    maxPrice = Math.max(...maxPrice);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value : $${maxPrice}`;

    priceInput.addEventListener("input", () => {
        const value = priceInput.value;
        priceValue.textContent = `Value : $${value}`;
        let newStore = store.filter(product => {
            return product.price <= value;
        });
        displayProducts(newStore, getElement("#products"), true);

        if (newStore.length < 1) {
            const products = getElement('#products');
            products.innerHTML = `<h3 class="filter-error">
            sorry, no products matched your search
            </h3>`;
        }
    });
}

export default setupPrice;