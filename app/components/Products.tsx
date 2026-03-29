"use client";

import Button from "./Button";
import { useProducts } from "@/features/products/useProducts";

export default function Products() {
	const { products, handleAddToCart } = useProducts();

	return (
		<div className="flex items-center justify-center gap-4">
			{products.map((product) => (
				<div
					key={product.id}
					className="border p-4 rounded space-y-2"
				>
					<p>{product.name}</p>
					<p>Price: {product.price} Tk.</p>

					<Button
						type="primary"
						handler={() => handleAddToCart(product)}
					>
						Add to Cart
					</Button>
				</div>
			))}
		</div>
	);
}
