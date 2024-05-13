import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return fetch("/me")
    .then(res => res.json())
    .then(data => data)
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: null,
        status: "idle"
    },
    reducers: {
        login(state, action) {
            state.entities = action.payload
        },
        logout(state) {
            state.entities = null
        },
        signup(state, action) {
            state.entities = action.payload
        },
        addFeedBack(state, action) {
            const updatedFeedbacks = [...state.entities.feedbacks, action.payload]
            state.entities = {...state.entities, feedbacks: updatedFeedbacks, feedbacks_count: action.payload.user.feedbacks_count}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
        })
    }
})

export const { login, logout, signup, addFeedBack } = userSlice.actions;

export default userSlice.reducer;