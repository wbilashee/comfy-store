import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

const setupSearch = (store) => {
    const form = getElement(".input-form");
    const input = getElement(".search-input");

    form.addEventListener("keyup", () => {
        const value = input.value;
        if (value) {
            const newStore = store.filter((product) => {
                return product.title.toLowerCase().includes(value);
            });

            if (newStore.length < 1) {
                const products = getElement('#products');
                products.innerHTML = `<h3 class="filter-error">
                sorry, no products matched your search
                </h3>`;
            } else {
                displayProducts(newStore, getElement("#products"), true);
            }
        }
    });
}

export default setupSearch;