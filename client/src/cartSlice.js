import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk("cart/fetchCart", () => {
    return fetch("/my-cart")
    .then(res => res.json())
    .then(data => data)
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: null,
        status: "idle",
    },
    reducers: {
        addItemToCart(state, action) {
            const ItemExist = state.entities.order_items.find((item) => item.id === action.payload.id)
            if (ItemExist) {
                const increaseQty = state.entities.order_items.map((item) => 
                item.id === action.payload.id ? {...ItemExist, quantity: ItemExist.quantity + 1, items_cost: action.payload.items_cost} : item)
                const cartCopy = {...state.entities, order_items: increaseQty, 
                item_counts: action.payload.cart.item_counts, subtotal: action.payload.cart.subtotal,
                tax: action.payload.cart.tax, total: action.payload.cart.total}
                state.entities = cartCopy
            } else {
                const updatedItems = [...state.entities.order_items, action.payload]
                const cartCopy = {...state.entities, order_items: updatedItems, 
                item_counts: action.payload.cart.item_counts, subtotal: action.payload.cart.subtotal,
                tax: action.payload.cart.tax, total: action.payload.cart.total}
                state.entities = cartCopy
            }
        },
        decreaseItemQty(state, action) {
            const ItemExist = state.entities.order_items.find((item) => item.id === action.payload.id)
            if (ItemExist.quantity === 1) {
                const deleteItem = state.entities.order_items.filter((item) => item.id !== action.payload.id)
                state.entities = {...state.entities, order_items: deleteItem, 
                item_counts: action.payload.cart.item_counts, subtotal: action.payload.cart.subtotal,
                tax: action.payload.cart.tax, total: action.payload.cart.total}
            } else {
                const decreaseQty = state.entities.order_items.map((item) => 
                item.id === action.payload.id ? {...ItemExist, quantity: ItemExist.quantity - 1, items_cost: action.payload.items_cost} : item)
                state.entities = {...state.entities, order_items: decreaseQty, 
                item_counts: action.payload.cart.item_counts, subtotal: action.payload.cart.subtotal,
                tax: action.payload.cart.tax, total: action.payload.cart.total}
            }
        },
        removeItemFromCart(state, action){
            const cancelItem = state.entities.order_items.filter((item) => item.id !== action.payload.id)
            state.entities = {...state.entities, order_items: cancelItem, item_counts: action.payload.cart.item_counts,
            subtotal: action.payload.cart.subtotal, tax: action.payload.cart.tax, total: action.payload.cart.total}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
        })
    }
})

export const { addItemToCart, decreaseItemQty, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;