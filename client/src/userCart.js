import React, {useEffect, useState} from "react"

const UserCartContext = React.createContext()

function UserCartProvider({children}){
    const [cart, setCart] = useState(null)
    // const totalQty = cart.order_items.reduce((quantity, item) => quantity + item.quantity, 0)

    useEffect(() => {
        fetch('/my-cart')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCart(data)})
    }, [])

    function addToCart(addedItem){
        const ItemExist = cart.order_items.find((item) => item.id === addedItem.id)
        if (ItemExist) {
            const increaseQty = cart.order_items.map((item) => 
            item.id === addedItem.id ? {...ItemExist, quantity: ItemExist.quantity + 1} : item)
            setCart({...cart, order_items: increaseQty})
        } else {
            const updatedItems = [...cart.order_items, addedItem]
            const addQtyToDish = {...addedItem.dish, quantity: addedItem.quantity}
            const updatedDish = [...cart.dishes, addQtyToDish]
            const copyOfCart = {...cart, order_items: updatedItems, dishes: updatedDish, item_counts: addedItem.cart.item_counts}
            setCart(copyOfCart)
        }
    }

    function removeFromCart(removedItem){
        const ItemExist = cart.order_items.find((item) => item.id === removedItem.id)
        if (ItemExist.quantity === 1) {
            const deleteItem = cart.order_items.filter((item) => item.id !== removedItem.id)
            setCart({...cart, order_items: deleteItem})
        } else {
            const decreaseQty = cart.order_items.map((item) =>
            item.id === removedItem.id ? {...ItemExist, quantity: ItemExist.quantity - 1} : item)
            setCart({...cart, order_items: decreaseQty})
        }
    }

    function handleDeleteItem(cancelledItem){
        const cancelItem = cart.order_items.filter((item) => item.id !== cancelledItem.id)
        const cancelDish = cart.dishes.filter((dish) => dish.id !== cancelledItem.dish_id)
        const copyOfCart = {...cart, order_items: cancelItem, dishes: cancelDish, item_counts: cancelledItem.cart.item_counts}
        setCart(copyOfCart)
    }

    return (
        <UserCartContext.Provider value={{cart, setCart, addToCart, removeFromCart, handleDeleteItem}}>
            {children}
        </UserCartContext.Provider>
    )
}

export {UserCartContext, UserCartProvider};