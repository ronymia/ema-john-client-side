import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoreCart } from '../../utilities/localStorage';

import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import './Shop.css';

export default function Shop() {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

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

    return (
        <section className="shop-container">
            <div className="products-container">
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
