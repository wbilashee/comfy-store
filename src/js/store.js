import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("store");

const setupStore = (products) => {
    store = products.map(product => {
        const { id, image, title, price, company, featured } = product;
        return { id, image, title, price, company, featured };
    });
    setStorageItem("store", store);
}

const findProduct = (id) => {
    let product = store.find(product => product.id == id);
    return product;
}

export {
    store,
    setupStore,
    findProduct,
}