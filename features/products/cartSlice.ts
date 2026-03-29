import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/features/products/productsSlice";

interface cartItem extends Product {
	quantity: number;
}
const initialState: cartItem[] = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const item = state.find((i) => i.id === action.payload.id);

			if (item) {
				item.quantity += 1;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
		},
	},
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
