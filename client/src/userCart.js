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
        console.log(addedItem)
        if (ItemExist) {
            const increaseQty = cart.order_items.map((item) => 
            item.id === addedItem.id ? {...ItemExist, quantity: ItemExist.quantity + 1, items_cost: addedItem.items_cost} : item)
            const copyOfCart = {...cart, order_items: increaseQty, 
            item_counts: addedItem.cart.item_counts, subtotal: addedItem.cart.subtotal,
            tax: addedItem.cart.tax, total: addedItem.cart.total}
            setCart(copyOfCart)
        } else {
            const updatedItems = [...cart.order_items, addedItem]
            const copyOfCart = {...cart, order_items: updatedItems, 
            item_counts: addedItem.cart.item_counts, subtotal: addedItem.cart.subtotal,
            tax: addedItem.cart.tax, total: addedItem.cart.total}
            setCart(copyOfCart)
        }
    }

    function removeFromCart(removedItem){
        const ItemExist = cart.order_items.find((item) => item.id === removedItem.id)
        if  (ItemExist.quantity === 1) {
            const deleteItem = cart.order_items.filter((item) => item.id !== removedItem.id)
            const copyOfCart = {...cart, order_items: deleteItem, 
            item_counts: removedItem.cart.item_counts, subtotal: removedItem.cart.subtotal,
            tax: removedItem.cart.tax, total: removedItem.cart.total}
            setCart(copyOfCart)
        } else {
            const decreaseQty = cart.order_items.map((item) =>
            item.id === removedItem.id ? {...ItemExist, quantity: ItemExist.quantity - 1, items_cost: removedItem.items_cost} : item)
            const copyOfCart = {...cart, order_items: decreaseQty, 
            item_counts: removedItem.cart.item_counts, subtotal: removedItem.cart.subtotal,
            tax: removedItem.cart.tax, total: removedItem.cart.total}
            setCart(copyOfCart)
        }
    }

    function handleDeleteItem(cancelledItem){
        const cancelItem = cart.order_items.filter((item) => item.id !== cancelledItem.id)
        const copyOfCart = {...cart, order_items: cancelItem, item_counts: cancelledItem.cart.item_counts,
        subtotal: cancelledItem.cart.subtotal, tax: cancelledItem.cart.tax, total: cancelledItem.cart.total}
        setCart(copyOfCart)
    }

    return (
        <UserCartContext.Provider value={{cart, setCart, addToCart, removeFromCart, handleDeleteItem}}>
            {children}
        </UserCartContext.Provider>
    )
}

export {UserCartContext, UserCartProvider};