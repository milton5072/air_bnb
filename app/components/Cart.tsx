"use client";

import { useCart } from "@/features/products/useCart";

export default function Cart() {
	const { cart, totalPrice, totalItems } = useCart();

	return (
		<div className="border p-4 rounded space-y-3">
			<h2 className="text-xl font-bold">🛒 Cart</h2>

			{cart.length === 0 ? (
				<p className="text-gray-500">Cart is empty</p>
			) : (
				<>
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex justify-between border-b pb-2"
						>
							<span>{item.name}</span>
							<span>
								{item.quantity} × {item.price} Tk
							</span>
						</div>
					))}

					<div className="pt-3 font-semibold">
						<p>Total Items: {totalItems}</p>
						<p>Total Price: {totalPrice} Tk</p>
					</div>
				</>
			)}
		</div>
	);
}
