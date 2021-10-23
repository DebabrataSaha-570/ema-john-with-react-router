import React from 'react';
import useProducts from '../../Hooks/useProduct';

const OrderReview = () => {
    const [products] = useProducts()
    return (
        <div>
            <h3>This is order review component {products.length} </h3>
        </div>
    );
};

export default OrderReview;