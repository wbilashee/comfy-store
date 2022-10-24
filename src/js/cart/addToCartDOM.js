import { getElement, formatPrice } from "../utils.js";
const cartItems = getElement(".cart-items");

const addToCartDOM = ({ id, title, image, price, amount }) => {
    const article = document.createElement("article");
    article.classList.add("cart-item");
    article.setAttribute("data-id", id);

    article.innerHTML = `<img class="cart-item-img" 
    src="${image}" 
    alt="${title}"
    />
    <div>
        <h4 class="cart-item-title">${title}</h4>
        <p class="cart-item-price">${formatPrice(price)}</p>
        <button class="cart-item-remove" data-id="${id}">remove</button>
    </div>
    <div>
        <button class="cart-item-increase" data-id="${id}">
        <i class="fas fa-chevron-up"></i>
        </button>
        <p class="cart-item-amount" data-id="${id}">${amount}</p>
        <button class="cart-item-decrease" data-id="${id}">
        <i class="fas fa-chevron-down"></i>
        </button>
    </div>`;

    cartItems.appendChild(article);
}

export default addToCartDOM;