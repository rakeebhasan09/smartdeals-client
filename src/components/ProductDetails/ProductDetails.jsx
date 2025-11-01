import { useLoaderData } from "react-router";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const ProductDetails = () => {
	const product = useLoaderData();
	return (
		<main>
			{/* Product Detail Area */}
			<div className="py-10 md:py-14 lg:py-20">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
						<div className="lg:col-span-5">
							<div>
								<LeftSide product={product} />
							</div>
						</div>
						<div className="lg:col-span-7">
							<RightSide product={product} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductDetails;
