import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    //...............using for of loop 

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    //................using reduce 
    // const totalReducer = (previous, product) => previous + product.price;

    // const total = cart.reduce(totalReducer, 0)

    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order summary </h3>
            <h5>Items ordered : {cart.length}</h5>
            <br />
            <p>total : {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;