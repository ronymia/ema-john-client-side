/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import { getStoreCart } from '../utilities/localStorage';

/* eslint-disable import/prefer-default-export */
export const productAndCartLoader = async () => {
    // get cart
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get local cart
    const savedCart = getStoreCart();
    const initialCart = [];

    for (const id in savedCart) {
        const storedProduct = products.find((product) => product.id === id);

        if (storedProduct) {
            const quantity = savedCart[id];
            storedProduct.quantity = quantity;
            initialCart.push(storedProduct);
        }
    }
    return { products, initialCart };
};
