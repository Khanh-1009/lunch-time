import React, { useContext } from "react"
import { UserCartContext } from "../userCart";

function Dishes({dishes}){
    const {name, description, price, picture_url, is_gluten, is_vegeterian, is_spicy, is_nutfree, id} = dishes
    const {cart, addToCart} = useContext(UserCartContext)

    function handleClick() {
        fetch("/order_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dish_id: id,
                quantity: 1
            })
        })
        .then(res => res.json())
        .then(newItem => {
            alert('Item successfully added to your cart')
            addToCart(newItem)
        })
    }

    return (
        <div className="menu-card">
            <img src={picture_url} alt={name} className="" />
            <h3>{name}</h3>
            <hr />
            <p>{description}</p>
            <hr />
            <p>${price}</p>
            {is_vegeterian ? <span>&#129388;</span> : ""} 
            {is_gluten ? <span>🌾</span> : ""}
            {is_spicy ? <span>🌶️</span> : ""}
            {is_nutfree ? <span>&#129372;</span> : ""}
            <br />
            {/* {cart === null ? "" : cart.order_items.id === id ? <button>Added to Cart</button> : <button onClick={handleClick}>Place Order</button>} */}
            <button onClick={handleClick}>Place Order</button>
        </div>

    )
}

export default Dishes;