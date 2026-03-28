import Counter from "./components/Counter";
import Products from "./components/Products";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			{/* <Counter /> */}
			<div className="Pt-8">
				<Products />
			</div>
		</div>
	);
}
