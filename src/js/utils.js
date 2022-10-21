const getElement = (selection) => {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    }

    throw new Error(`Please check ${selection} selector, no such element exists.`);
}

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((price).toFixed(2));
    return formattedPrice;
}

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);

    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }

    return storageItem;
}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

export {
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem,
};