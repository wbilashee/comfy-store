import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const displayProducts = (products, element, filters) => {
    element.innerHTML = products.map(product => {
        const { id, image, title, price } = product;

        return `<div class="product">
        <div class="product-img">
        <img src="${image}" alt="${title}" />
        <div class="product-icons">
            <a href="./product.html?id=${id}" class="product-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-cart-shopping"></i>
            </button>
        </div>
        </div>
        <div class="product-info">
        <p class="name">${title}</p>
        <h4 class="price">${formatPrice(price)}</h4>
        </div>
        </div>`
    }).join("");

    if (filters) return;

    element.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        if (parent.classList.contains("product-cart-btn")) {
            addToCart(parent.dataset.id);
        }
    });
}

export default displayProducts;