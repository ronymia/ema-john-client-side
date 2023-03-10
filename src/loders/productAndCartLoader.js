import { getStoreCart } from '../utilities/localStorage';

export const productAndCartLoader = async () => {
    // get cart
    const productsData = await fetch('http://localhost:5000/products');
    const products = await productsData.json();

    // get local cart
    const savedCart = getStoreCart();
    const initialCart = [];

    for (const id in savedCart) {
        const storedProduct = products.find((product) => product._id === id);

        if (storedProduct) {
            const quantity = savedCart[id];
            storedProduct.quantity = quantity;
            initialCart.push(storedProduct);
        }
    }
    return { products, initialCart };
};
