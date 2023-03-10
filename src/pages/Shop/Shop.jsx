import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/localStorage';

import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Shop() {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const localCart = getStoreCart();
        const savedCart = [];

        for (const id in localCart) {
            const storedProduct = products.find((product) => product._id === id);

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

        const existProuduct = cart.find((product) => product._id === selectedProduct._id);

        if (!existProuduct) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const restProduct = cart.filter((product) => product._id !== selectedProduct._id);
            existProuduct.quantity += 1;
            newCart = [...restProduct, existProuduct];
        }

        // set product to cart
        setCart(newCart);
        // local storage
        addToDb(selectedProduct._id);
    };

    return (
        <section className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Product product={product} key={product._id} addToCat={addToCat} />
                ))}
            </div>
            <aside className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/orders" className="btn review-btn">
                        Review Order
                        <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                    </Link>
                </Cart>
            </aside>
        </section>
    );
}
