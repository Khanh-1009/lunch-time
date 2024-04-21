import React from "react"


function CartItems({item, addToCart, removeFromCart, handleDeleteItem}){
    const {name, price, picture_url, id, quantity} = item

    function handleClickDeleteItem(){
        fetch("/delete-item", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dish_id: id
            })
        })
        .then(res => res.json())
        .then(deletedItem => handleDeleteItem(deletedItem))
    }

    return (
        <div id='cart-item-card'>
            <img src={picture_url} alt={name} />
            <h3>{name}</h3> <br />
            <button id="decrease" onClick={() => removeFromCart(item)}>-</button>
            <h4 style={{fontWeight: "normal"}}>{quantity}</h4>
            <button id="increase" onClick={() => addToCart(item)}>+</button>
            <h4 id="price">${price}</h4>
            <span id="delete" onClick={handleClickDeleteItem}>&#10060;</span>
        </div>
    )
}

export default CartItems;