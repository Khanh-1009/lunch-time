import React, { useContext } from "react"
import { UserCartContext } from "../userCart";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

function Cart() {
    const {cart, addToCart, removeFromCart, handleDeleteItem} = useContext(UserCartContext)
    

    return(
        <div className="cart">
            <h1>Your Cart | {cart === null ? "" : cart.item_counts} items</h1>

            {cart === null ? "" : cart.order_items.map((item) => (
                <CartItems key={item.id} item={item} 
                addToCart={addToCart} removeFromCart={removeFromCart}
                handleDeleteItem={handleDeleteItem}/>
            ))} 
            <Checkout cart={cart === null ? "" : cart}/>
        </div>
    )
}

export default Cart;