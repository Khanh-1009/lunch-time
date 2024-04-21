import React, { useContext, useEffect } from "react";
import {Link} from 'react-router-dom'
import { RestaurantContext } from "../restaurants";
import RestaurantList from "./RestaurantList";
import { UserContext } from "../user";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../restaurantsSlice";

function Home(){
    const {user} = useContext(UserContext)
    // const {restaurants} = useContext(RestaurantContext)
    const restaurants = useSelector((state) => state.entities) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [])
   

    return (
        <div className="app">
        {!user || user.error ? 
            <div className="home">
            <h1>Individual Meals, Automated for Big Teams.</h1>
            <p>Custom, individually-packaged team lunches from your favorite restaurants. The highest rated corporate catering & 
                <br/>office lunch delivery service. Scalable to 1000s of employees</p>
            <Link to={'/signup'}><button className="home-buttons">Try Your Lunch</button></Link>
            </div> :
            <div className="restaurant-page">
                <div id="advertisement">
                <h1>Help us to improve our service.<br>
                </br>We want feedback from our trusted customers!</h1>
                <Link to={'/feedback'} ><button className="home-buttons">Give FeedBack</button></Link>
                </div>
            {restaurants.map((restaurant) => (
                <RestaurantList key={restaurant.id} restaurant={restaurant}/>
            ))}
            </div>
        }
        </div>
    )
}

export default Home;