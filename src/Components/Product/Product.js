import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { name, img, stock, seller, price } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    return (
        <div className="product" >
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> {cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;