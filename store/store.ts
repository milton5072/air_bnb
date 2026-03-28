import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";

// ✅ create store
export const store = configureStore({
	reducer: {
		counters: counterReducer,
	},
});

// ✅ types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
