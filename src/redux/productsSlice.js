import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    products: [],
    status: 'start',
    error: null,
    currentPage: 1,
    totalPage: 30,
}

const url = "https://63e9ae764f3c6aa6e7d06a70.mockapi.io/products"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (page) => {
    // const res = await axios.get(`${url}?page=${page}&&limit=5`)
    const res = await axios.get(`${url}?page=${page}&&limit=6`)
    return res.data
})

export const findProducts = createAsyncThunk('products/findProducts', async (name, page) => {
    // const res = await axios.get(`${url}?page=${page}&&limit=5`)
    const res = await axios.get(`${url}?name=${name}`)
    return res.data
})

export const findByIdProducts = createAsyncThunk('products/findByIdProducts', async (id) => {
    // const res = await axios.get(`${url}?page=${page}&&limit=5`)
    const res = await axios.get(`${url}?id=${id}`)
    return res.data
})
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'

            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.products = action.error.payload
            })
            .addCase(findProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(findProducts.fulfilled, (state, action) => {
                // state.status = 'find'
                state.products = action.payload
            })
            .addCase(findProducts.rejected, (state, action) => {
                state.status = "failed"
                state.products = action.error.payload
            })
    }

});

export default productsSlice.reducer;