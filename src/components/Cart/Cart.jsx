import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

export default function Cart({ cart, clearCart, children }) {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    cart.forEach((product) => {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    });

    const text = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(text);

    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${text}</p>
            <h2>Grand Total: ${grandTotal}</h2>
            <button type="button"
                className="btn clear-btn"
                onClick={clearCart}>
                Clear Cart
                <FontAwesomeIcon className="cart__clear-icon" icon={faTrashAlt} /></button>
            {children}
        </div>
    );
}
