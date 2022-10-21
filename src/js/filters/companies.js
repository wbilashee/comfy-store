import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

const setupCompanies = (store) => {
    const companies = ['all', ...new Set(store.map((product) => product.company))];
    const companiesDOM = getElement(".companies");
    companiesDOM.innerHTML = companies.map(company => {
        return `<button class="company-btn">${company}</button>`;
    }).join("");

    companiesDOM.addEventListener("click", (e) => {
        const element = e.target;
        if (element.classList.contains("company-btn")) {
            let newStore = [];
            if (element.textContent === "all") {
                newStore = [...store];
            } else {
                newStore = store.filter(product => {
                    return product.company === e.target.textContent;
                });
            }
            displayProducts(newStore, getElement("#products"), true);
        }
    });
}

export default setupCompanies;