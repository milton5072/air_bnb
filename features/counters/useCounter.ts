"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement } from "@/features/counters/countersSlice";

export const useCounter = () => {
	const dispatch = useAppDispatch();
	const counters = useAppSelector((state) => state.counters);

	const handleIncrement = (id: number) => {
		dispatch(increment(id));
	};

	const handleDecrement = (id: number) => {
		dispatch(decrement(id));
	};

	// total count
	const total = counters.reduce((sum, counter) => sum + counter.value, 0);

	return {
		counters,
		total,
		handleIncrement,
		handleDecrement,
	};
};
