import React, { useEffect, useState } from "react"

const RestaurantContext = React.createContext()

function RestaurantProvider({children}){
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then(res => res.json())
        .then(data => setRestaurants(data))
    }, [])

    return (
        <RestaurantContext.Provider
            value={{restaurants, setRestaurants}}>
                {children}
        </RestaurantContext.Provider>
    )
        
}

export {RestaurantContext, RestaurantProvider}