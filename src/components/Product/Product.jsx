import React from 'react';
import './Product.css';

export default function Product(props) {
    const { addToCat, product } = props;
    const { img, name, price, seller, ratings } = product;
    console.log(img);

    return (
        <article className="product">
            <figure>
                <img className="product__img" src={img} alt="" />
            </figure>
            <div className="product__info">
                <h1 className="product__name">{name}</h1>
                <p className="product__price">Price : ${price}</p>
                <p className="product__manufacturer">Manufacturer : {seller}</p>
                <p className="product__rating">Rating : {ratings} start</p>
            </div>
            <button type="button" onClick={() => addToCat(product)} className="btn cart--btn">
                Add to cart
            </button>
        </article>
    );
}
