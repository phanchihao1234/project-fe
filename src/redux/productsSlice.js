import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    products: [],
    status: 'start',
    error: null
}

const url = "https://63e9ae764f3c6aa6e7d06a70.mockapi.io/products"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get(url)
    return res.data
})
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.start = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.start = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.start = 'failed'
                state.products = action.error.payload
            })
    }

});

export default productsSlice.reducer;