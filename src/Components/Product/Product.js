import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, stock, seller, price } = props.product
    return (
        <div className="product" >
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="btn-regular">add to cart</button>
            </div>
        </div>
    );
};

export default Product;