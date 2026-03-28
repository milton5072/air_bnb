import { createSlice } from "@reduxjs/toolkit";

type Products = {
	id: number;
	name: string;
	price: number;
};

const initialState: Products[] = [
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
