"use client";

import { useAppSelector } from "@/store/hooks";

export const useCart = () => {
	const cart = useAppSelector((state) => state.cart);

	// total price
	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	// total items
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

	return {
		cart,
		totalPrice,
		totalItems,
	};
};
