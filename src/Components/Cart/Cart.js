import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    //...............using for of loop 

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        console.log(product)
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    console.log(typeof totalQuantity)

    //................using reduce 
    // const totalReducer = (previous, product) => previous + product.price;

    // const total = cart.reduce(totalReducer, 0)

    const shipping = total > 10 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order summary </h3>
            <h5>Items ordered : {totalQuantity}</h5>
            <br />
            <p>total : {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;