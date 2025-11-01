import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

const RightSide = ({ product }) => {
	const {
		_id,
		title,
		seller_name,
		price_min,
		price_max,
		created_at,
		email,
		location,
		seller_contact,
		status,
	} = product;
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-6">
			{/* Title & Back */}
			<div>
				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2"
				>
					<HiOutlineArrowLeft className="text-[20px] text-black" />
					Back to Products
				</button>
				<h2 className="lg:text-[48px] font-bold">{title}</h2>
				<span className="bg-[linear-gradient(125deg,rgba(99,46,227,0.15)_5.68%,rgba(159,98,242,0.15)_88.38%)] rounded-full inline-block py-1.5 px-4">
					<span className="gradient-text">{seller_name}</span>
				</span>
			</div>
			{/* Price */}
			<div className="card-basic">
				<h2 className="text-[#4CAF50] text-[28px] font-bold">
					${price_min} - {price_max}
				</h2>
				<p>Price starts from</p>
			</div>
			{/* Product Details */}
			<div className="card-basic">
				<h3 className="text-[24px] font-semibold mb-6">
					Product Details
				</h3>
				<ul className="flex flex-col gap-3">
					<li>
						<span className="font-semibold">Product ID:</span> {_id}
					</li>
					<li>
						<span className="font-semibold">Posted:</span>{" "}
						{new Date(created_at).toLocaleDateString("en-CA")}
					</li>
				</ul>
			</div>
			{/* Sellar Informatio */}
			<div className="card-basic">
				<h3 className="text-[24px] font-semibold mb-6">
					Seller Information
				</h3>
				<div className="flex items-center gap-4">
					<div className="w-14 h-14 rounded-full bg-[#D9D9D9]"></div>
					<div>
						<h4 className="font-semibold ">{seller_name}</h4>
						<p className="text-[14px] opacity-[0.8]">{email}</p>
					</div>
				</div>
				<ul className="flex flex-col gap-3 mt-4">
					<li>
						<span className="font-semibold">Location:</span>{" "}
						{location}
					</li>
					<li>
						<span className="font-semibold">Contact:</span>{" "}
						{seller_contact}
					</li>
					<li>
						<span className="font-semibold">Status:</span>{" "}
						<div className="badge badge-warning">{status}</div>
					</li>
				</ul>
			</div>
			{/* Button */}
			<div>
				<button className="by-product-btn">
					I want Buy This Product
				</button>
			</div>
		</div>
	);
};

export default RightSide;
