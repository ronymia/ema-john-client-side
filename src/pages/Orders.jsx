import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItems from '../components/ReviewItems/ReviewItems';

function Orders() {
    const { initialCart } = useLoaderData();

    return (
        <section className="product-container">
            <div className="">
                {initialCart.map((product) => (
                    <ReviewItems key={product.id} product={product} />
                ))}
            </div>
            <aside className="cart-container">
                <Cart cart={initialCart} />
            </aside>
        </section>
    );
}

export default Orders;
