import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItems from '../components/ReviewItems/ReviewItems';
import { removeFromDb } from '../utilities/localStorage';

function Orders() {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (productId) => {
        const rest = cart.filter((product) => product.id !== productId);
        setCart(rest);
        removeFromDb(productId);
    };

    return (
        <section className="product-container">
            <div className="">
                {cart.map((product) => (
                    <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
            </div>
            <aside className="cart-container">
                <Cart cart={cart} />
            </aside>
        </section>
    );
}

export default Orders;
