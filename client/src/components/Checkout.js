import React from 'react'

function Checkout({cart}){
    const {subtotal, tax, total} = cart
    
    if (total === 0) {
        return(
            <div className='checkout'>
                <h1>Order Summary</h1>
                <p id='no-item'>Your Cart is Empty</p>
            </div>
        )
    } else {
        return(
        <div className='checkout'>
            <h1>Order Summary</h1>
            <div id='checkout-detail'>
            <p>Subtotal ${subtotal}</p>
            <p>Tax ${tax}</p>
            <p>Total ${total}</p>
            </div>
        </div>
    )}
}

export default Checkout;