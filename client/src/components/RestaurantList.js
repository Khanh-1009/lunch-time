import React, { Fragment } from "react"
import {Link} from "react-router-dom"

function RestaurantList({restaurant}){
    const {name, id} = restaurant

    return (
        <Fragment>
            <Link to={`/restaurants/${id}`}>
            <div className="restaurant-card">
                <h3>{name}</h3>
            </div>
            </Link>
        </Fragment>
    )
}

export default RestaurantList;