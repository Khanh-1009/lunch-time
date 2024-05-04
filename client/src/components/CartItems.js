import React from "react"


function CartItems({item, addToCart, removeFromCart, handleDeleteItem}){
    const {id, quantity, items_cost, dish} = item

    function handleClickDeleteItem(){
        fetch(`/order_items/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(deletedItem => {
            console.log(deletedItem)
            handleDeleteItem(deletedItem)})
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
        .then(increaseQty => {
            console.log(increaseQty)
            addToCart(increaseQty)})
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
        .then(decreaseQty => {
            console.log(decreaseQty)
            removeFromCart(decreaseQty)})
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