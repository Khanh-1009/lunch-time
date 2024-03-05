import React, { useContext } from "react"
import { RestaurantContext } from "../restaurants";
import { useParams } from "react-router-dom";

function RestaurantProfile(){
    const {restaurants} = useContext(RestaurantContext)
    const params = useParams()
    const restaurantID = parseInt(params.id)
    const chosenResto = restaurants.length > 0 ? 
    restaurants.find(({id}) => id === restaurantID) : ""

    console.log(chosenResto)
    return (
        <div className="app">
            <div id="restaurant-profile">
                <img src={chosenResto.image_url} alt={chosenResto.name} />
                <h1>{chosenResto.name}</h1>
                <p>{chosenResto.address}</p>
                <p>{chosenResto.phone}</p>
            </div>
        </div>
    )

}

export default RestaurantProfile;