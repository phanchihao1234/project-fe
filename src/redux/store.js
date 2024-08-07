// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';


const store = configureStore({
    reducer: {
        products: productsSlice,
        carts: cartSlice,
    },
})

export default store