import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../../components/Cart/Cart';
import ReviewItems from '../../components/ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/localStorage';

function Orders() {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (productId) => {
        const rest = cart.filter((product) => product._id !== productId);
        setCart(rest);
        removeFromDb(productId);
    };

    return (
        <section className="shop-container">
            <div className="">
                {cart.map((product) => (
                    <ReviewItems
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
            </div>
            <aside className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/shipping"
                        className="btn review-btn"
                    >
                        Proceed Checkout
                        <FontAwesomeIcon className="arrow-icon" icon={faCreditCard} />
                    </Link>
                </Cart>
            </aside>
        </section>
    );
}

export default Orders;
