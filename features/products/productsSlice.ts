import { createSlice } from "@reduxjs/toolkit";

export interface Product {
	id: number;
	name: string;
	price: number;
}

const initialState: Product[] = [
	{
		id: 1,
		name: "T-shirt",
		price: 10,
	},
	{
		id: 2,
		name: "Long-shirt",
		price: 100,
	},
	{
		id: 3,
		name: "Half-shirt",
		price: 20,
	},
];
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.push(action.payload);
		},
	},
});
export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
