import React, { useEffect, useState } from "react"

const RestaurantContext = React.createContext()

function RestaurantProvider({children}){
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch("/restaurants")
    }, [])
}