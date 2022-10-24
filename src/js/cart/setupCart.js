import {
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem,
} from "../utils.js";
import { findProduct } from "../store.js";
import { openCart } from "./toggleCart.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItems = getElement(".cart-items");
const cartTotal = getElement(".cart-total");
const cartItemCount = getElement(".navbar-cart-count");

let cart = getStorageItem("cart");

const addToCart = (id) => {
    const item = cart.find(item => item.id == id);

    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addToCartDOM(product);
    } else {
        let amount = increaseAmount(id);
        const items = [...cartItems.querySelectorAll(".cart-item-amount")];
        const newAmount = items.find(value => value.dataset.id == id);
        newAmount.textContent = amount;
    }

    displaycartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
    openCart();
}

const displaycartItemCount = () => {
    const amount = cart.reduce((total, item) => {
        return (total += item.amount)
    }, 0);
    cartItemCount.textContent = amount;
}

const displayCartTotal = () => {
    const total = cart.reduce((total, item) => {
        return (total += item.price * item.amount);
    }, 0);
    cartTotal.textContent = `Total : ${formatPrice(total)}`;
}

const displayCartItems = () => {
    cart.forEach(item => {
        addToCartDOM(item);
    });
}

const removeItem = (id) => {
    cart = cart.filter(item => item.id != id);
}

const increaseAmount = (id) => {
    let newAmount;
    cart = cart.map(item => {
        if (item.id == id) {
            newAmount = item.amount + 1;
            item = { ...item, amount: newAmount };
        }
        return item;
    });
    return newAmount;
}

const decreaseAmount = (id) => {
    let newAmount;
    cart = cart.map(item => {
        if (item.id == id) {
            newAmount = item.amount - 1;
            item = { ...item, amount: newAmount };
        }
        return item;
    });
    return newAmount;
}

const setupCartFunctionality = () => {
    cartItems.addEventListener("click", (e) => {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentID = parent.parentElement.dataset.id;

        if (element.classList.contains("cart-item-remove")) {
            removeItem(id);
            element.parentElement.parentElement.remove();
        }

        if (element.classList.contains("cart-item-increase")) {
            const newAmount = increaseAmount(parentID);
            parent.querySelector(".cart-item-amount").textContent = newAmount;
        }

        if (element.classList.contains("cart-item-decrease")) {
            const newAmount = decreaseAmount(parentID);
            if (newAmount == 0) {
                removeItem(parentID);
                parent.parentElement.remove();
            } else {
                parent.querySelector(".cart-item-amount").textContent = newAmount;
            }
        }

        displaycartItemCount();
        displayCartTotal();
        setStorageItem("cart", cart);
    });
}

const init = () => {
    displaycartItemCount();
    displayCartTotal();
    displayCartItems();
    setupCartFunctionality();
}

init();

export { addToCart };