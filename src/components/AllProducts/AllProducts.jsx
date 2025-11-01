import { useLoaderData } from "react-router";
import RecentProduct from "../Home/RecentProduct/RecentProduct";

const AllProducts = () => {
	const products = useLoaderData();
	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<h2 className="md:text-[48px] font-bold text-center">
					All <span className="gradient-text">Products</span>
				</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<RecentProduct key={product._id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default AllProducts;
