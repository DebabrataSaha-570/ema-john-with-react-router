import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart] = useCart(products)
    return (
        <div>
            <h3>This is order review component {products.length} </h3>
            <h3>{cart.length}</h3>
        </div>
    );
};

export default OrderReview;