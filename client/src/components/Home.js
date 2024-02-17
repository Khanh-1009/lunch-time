import React from "react";
import {Link} from 'react-router-dom'

function Home(){

    return (
        <div className="app">
            <div className="home">
            <h1>Individual Meals, Automated for Big Teams.</h1>
            <p>Custom, individually-packaged team lunches from your favorite restaurants. The highest rated corporate catering & 
                <br/>office lunch delivery service. Scalable to 1000s of employees</p>
            <Link to={'/signup'}><button id="get-start">Try Your Lunch</button></Link>
            </div>
            <div id="home-photo">
            </div>
        </div>
    )
}

export default Home;