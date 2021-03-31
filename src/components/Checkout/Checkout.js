import React from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {productName} = useParams();
    return (
        <div>
            <h1>this is checkout</h1>
        </div>
    );
};

export default Checkout;