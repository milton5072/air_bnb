import Counter from "./components/Counter";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			{/* <Counter /> */}
			<div className="Pt-8">
				<Products />
			</div>
			<div className="grid grid-cols-2 gap-6 p-6">
				<Cart />
			</div>
		</div>
	);
}
