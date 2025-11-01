import { use } from "react";
import RecentProduct from "../RecentProduct/RecentProduct";
import { Link } from "react-router";

const RecentProducts = ({ recentProductsPromise }) => {
	const products = use(recentProductsPromise);

	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<h2 className="md:text-[48px] font-bold text-center">
					Recent <span className="gradient-text">Products</span>
				</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<RecentProduct key={product._id} product={product} />
					))}
				</div>
				<div className="mt-10 text-center">
					<Link
						to="/register"
						className="w-[120px] block mx-auto bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-center py-3 font-semibold rounded"
					>
						Show All
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RecentProducts;
