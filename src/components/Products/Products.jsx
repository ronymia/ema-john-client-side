import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

export default function Products() {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const addToCat = (selectedProduct) => {
        let newCart = [];

        const existProuduct = cart.find((product) => product.id === selectedProduct.id);

        if (!existProuduct) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const restProduct = cart.filter((product) => product.id !== selectedProduct.id);
            existProuduct.quantity += 1;
            newCart = [...restProduct, existProuduct];
        }

        // set product to cart
        setCart(newCart);
        // local storage
        addToDb(selectedProduct.id);
    };

    useEffect(() => {
        const localCart = getStoreCart();
        const savedCart = [];

        for (const id in localCart) {
            const storedProduct = products.find((product) => product.id === id);

            if (storedProduct) {
                const quantity = localCart[id];
                storedProduct.quantity = quantity;
                savedCart.push(storedProduct);
            }
        }

        // set local storage product to cart
        setCart(savedCart);
    }, [products]);

    return (
        <section className="shop-container">
            <div className="shop-content">
                {products.map((product) => (
                    <Product product={product} key={product.id} addToCat={addToCat} />
                ))}
            </div>
            <aside className="cart-container">
                <Cart cart={cart} />
            </aside>
        </section>
    );
}
