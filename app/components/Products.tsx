"use client";

import Button from "./Button";
import { useProducts } from "@/features/products/useProducts";

export default function Products() {
	const { products } = useProducts();

	return (
		<div className="space-y-4">
			{products.map((product) => (
				<div
					key={product.id}
					className="border p-4 rounded"
				>
					<p>{product.name}</p>
					<p>Price: {product.price} Tk.</p>

					<Button
						type="primary"
						handler={() => {}}
					>
						Add to Cart
					</Button>
				</div>
			))}
		</div>
	);
}
