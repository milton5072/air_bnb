"use client";

import { useCounter } from "@/features/counters/useCounter";
import Button from "../components/Button";

export default function Counter() {
	const { counters, total, handleIncrement, handleDecrement } = useCounter();

	return (
		<div className="space-y-4">
			{counters.map((counter) => (
				<div
					key={counter.id}
					className="flex gap-4 items-center"
				>
					<Button
						type="danger"
						handler={() => handleDecrement(counter.id)}
					>
						-
					</Button>

					<span className="text-lg font-semibold">{counter.value}</span>

					<Button
						type="primary"
						handler={() => handleIncrement(counter.id)}
					>
						+
					</Button>
				</div>
			))}

			<h2 className="text-xl font-bold">Total: {total}</h2>
		</div>
	);
}
