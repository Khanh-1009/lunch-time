import React from "react"

function Dishes({dishes}){
    const {name, description, price, picture_url, is_gluten, is_vegeterian} = dishes

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
            <br />
            <button>Place Order</button>
        </div>

    )
}

export default Dishes;