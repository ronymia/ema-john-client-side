import React, { useEffect, useState } from 'react';
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

    const addToCat = (productID) => {
        const newCart = [...cart, productID];
        setCart(newCart);
    };

    return (
        <section className="shop-container">
            <div className="shop-content">
                {products.map((product) => (
                    <Product product={product} key={product.id} addToCat={addToCat} />
                ))}
            </div>
            <aside className="cart-container">cart</aside>
        </section>
    );
}
