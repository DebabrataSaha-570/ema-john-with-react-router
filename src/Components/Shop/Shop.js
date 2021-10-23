import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displyProducts, setDisplyProducts] = useState([])


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplyProducts(data)
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(pd => pd.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }

            }
            setCart(storedCart)
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        // save to local storage (for now)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matchedProducts.length)
        setDisplyProducts(matchedProducts)
    }
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="type here for search" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displyProducts.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                        > </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;