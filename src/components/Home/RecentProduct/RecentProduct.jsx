import { Link } from "react-router";

const RecentProduct = ({ product }) => {
	const { _id, title, price_min, price_max } = product;
	return (
		<div className="p-4 bg-white rounded-lg shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]">
			<div className="flex flex-col gap-4">
				{/* Photo */}
				<div className="h-[230px] bg-[#D9D9D9] rounded-lg"></div>
				<div>
					<h2 className="text-[24px] font-medium">{title}</h2>
					<p className="text-[20px] font-semibold gradient-text">
						${price_min} - {price_max}
					</p>
				</div>
				<div>
					<Link to={`/product-details/${_id}`} className="my-btn">
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentProduct;
