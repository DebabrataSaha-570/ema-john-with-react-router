import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, stock, seller, price, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    console.log(props)
    return (
        <div className="product" >
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                    initialRating={star}
                > </Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> {cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;