import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

export default function Products() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    return (
        <section className="shop-container">
            <div className="shop-content">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
            <div className="cart-container">cart</div>
        </section>
    );
}
