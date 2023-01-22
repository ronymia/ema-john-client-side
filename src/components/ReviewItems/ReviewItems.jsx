import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css';

function ReviewItems({ product, handleRemoveItem }) {
    const { id, name, img, price, shipping, quantity } = product;

    return (
        <article className="reviewItem-container">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="reviewItem">
                <div className="reviewItem-details">
                    <p className="item__name">{name}</p>
                    <p className="item__price">
                        Price : <span className="orange-color">${price}</span>
                    </p>
                    <p>
                        Shipping Charge : <span className="orange-color">${shipping}</span>
                    </p>
                    <p>
                        Quantity : <span className="orange-color">{quantity}</span>
                    </p>
                </div>
                <div className="reviewItem__delete-content">
                    <button
                        type="button"
                        onClick={() => handleRemoveItem(id)}
                        className="reviewItem__delete-btn"
                    >
                        <FontAwesomeIcon className="reviewItem__btn-icon" icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ReviewItems;
