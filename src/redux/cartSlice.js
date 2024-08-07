import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload)
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.carts = []
        },
        // setLoanding: (state) => {
        //     state.status = 'loading'
        // },
        // setError: (state, action) => {
        //     state.status = 'failed'
        //     state.error = action.payload
        // },
        // setLoaded: (state) => {
        //     state.status = 'succeeded'
        // }
    }
})

export const { addCart, removeCart, clearCart, setError, setLoanding, setLoaded } = cartSlice.actions
export default cartSlice.reducer