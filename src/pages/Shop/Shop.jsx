import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/localStorage';

import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * count
 * per page
 * page 
*/

export default function Shop() {
    // const { products, count } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products);
            })
    }, [page, size]);

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
            <div className="pagination">
                <p>Currently selected page : {page} and Size : {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={`${page === number && "selected"} btn`}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>
                    )
                }
                <select
                    className='btn'
                    onChange={event => setSize(event.target.value)}
                >
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </section>
    );
}
