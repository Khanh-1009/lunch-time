import React, { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "../restaurants";
import { useParams } from "react-router-dom";
import Dishes from "./Dishes";
import {Link} from "react-router-dom"

function Menu(){
    const {restaurants} = useContext(RestaurantContext)
    const [currentRestaurant, setCurrentRestaurant] = useState({dishes: []})
    const params = useParams()
    const restaurantID = parseInt(params.id)

    useEffect (() => {
        if (restaurants.length > 0) {
            const chosenRestaurant = restaurants.find(({id}) => id === restaurantID)
            setCurrentRestaurant(chosenRestaurant)
        }
    }, [restaurants])

    console.log(currentRestaurant)

    return (
        <div className="menu">
            <Link to={`/restaurant/${restaurantID}`} style={{textDecoration: 'none'}}>
                <h1>{currentRestaurant.name}</h1></Link>
            {currentRestaurant.dishes.map((alldishes) => (
                <Dishes key={alldishes.id} dishes={alldishes}/>
            ))}
        </div>
    )
}

export default Menu;