import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./appStoreSlices/cartSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;