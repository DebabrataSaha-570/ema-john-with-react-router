import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3> products {products.length}</h3>
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>Items order</p>
            </div>

        </div>
    );
};

export default Shop;