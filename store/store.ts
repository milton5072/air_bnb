import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import productsReducer from "@/features/products/productsSlice";
import cartReducer from "@/features/products/cartSlice";

// ✅ create store
export const store = configureStore({
	reducer: {
		counters: counterReducer,
		products: productsReducer,
		cart: cartReducer,
	},
});

// ✅ types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
