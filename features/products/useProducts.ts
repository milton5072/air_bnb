"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addToCart } from "./cartSlice";
import { Product } from "@/features/products/productsSlice";

export const useProducts = () => {
	const products = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();
	const handleAddToCart = (product: Product) => {
		dispatch(addToCart(product));
	};

	return {
		products,
		handleAddToCart,
	};
};
