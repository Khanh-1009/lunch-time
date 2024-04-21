export function fetchRestaurants() {
    return function (dispatch) {
        dispatch({type: "restaurants/restaurantsLoading"})
        fetch("/restaurants")
        .then(res => res.json())
        .then((data) => {
            dispatch({type: "restaurants/restaurantsLoaded", payload: data})
        })
    }
}

const initialState = {
    entities: [],
    status: "idle"
}

export default function restaurantsReducer(state = initialState, action){
    switch (action.type){
        case "restaurants/restaurantsLoading":
            return {
                ...state,
                status: "loading",
            };
        case "restaurants/restaurantsLoaded":
            return {
                ...state,
                entities: action.payload,
                status: "idle",
            };
        default:
            return state;
    }
}