import React from "react"
import { useDispatch } from "react-redux";
import { addItemToCart, decreaseItemQty, removeItemFromCart } from "../cartSlice"

function CartItems({item}){
    const {id, quantity, items_cost, dish} = item
    const dispatch = useDispatch();

    function handleClickDeleteItem(){
        fetch(`/order_items/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(deletedItem => dispatch(removeItemFromCart(deletedItem)))
    }

    function handleClickIncreaseQty() {
        fetch(`/order_items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: quantity + 1
            }),
        })
        .then(res => res.json())
        .then(increaseQty => dispatch(addItemToCart(increaseQty)))
    }

    function handleClickDecreaseQty() {
        fetch(`/order_items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: quantity - 1
            }),
        })
        .then(res => res.json())
        .then(decreaseQty => dispatch(decreaseItemQty(decreaseQty)))
    }

    return (
        <div id='cart-item-card'>
            <img src={dish.picture_url} alt={dish.name} />
            <h3>{dish.name}</h3> <br />
            <button id="decrease" onClick={handleClickDecreaseQty}>-</button>
            <h4 style={{fontWeight: "normal"}}>{quantity}</h4>
            <button id="increase" onClick={handleClickIncreaseQty}>+</button>
            <h4 id="price">${items_cost}</h4>
            <span id="delete" onClick={handleClickDeleteItem}>🗑️</span>
        </div>
    )
}

export default CartItems;