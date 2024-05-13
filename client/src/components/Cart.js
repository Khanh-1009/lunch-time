import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { fetchCart } from "../cartSlice";

function Cart() {
    const cart = useSelector((state) => state.cart.entities)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    return(
        <div className="cart">
            <h1>Your Cart | {cart === null ? "" : cart.item_counts} items</h1>

            {cart === null ? "" : cart.order_items.map((item) => (
                <CartItems key={item.id} item={item} />
            ))} 
            <Checkout cart={cart === null ? "" : cart}/>
        </div>
    )
}

export default Cart;