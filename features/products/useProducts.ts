"use client";

import { useAppSelector } from "@/store/hooks";

export const useProducts = () => {
	const products = useAppSelector((state) => state.products);

	return {
		products,
	};
};
