import { useRef } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

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
	const bidModalRef = useRef(null);

	const handleBidModalOpen = () => {
		bidModalRef.current.showModal();
	};

	const handleSubmitBid = (e) => {
		e.preventDefault();
		const buyerName = e.target.name.value;
		const buyerEmail = e.target.email.value;
		const buyerPhoto = e.target.photo.value;
		const buyerPrice = e.target.price.value;
		const buyerContact = e.target.contact.value;

		const newBid = {
			product: _id,
			buyer_image: buyerPhoto,
			buyer_name: buyerName,
			buyer_contact: buyerContact,
			buyer_email: buyerEmail,
			bid_price: buyerPrice,
			status: "pending ",
		};

		fetch("http://localhost:3000/bids", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newBid),
		})
			.then((res) => res.json())
			.then((data) => {
				// If Already Bidded
				if (data.message) {
					e.target.reset();
					bidModalRef.current.close();
					Swal.fire({
						position: "center",
						icon: "success",
						title: data.message,
						showConfirmButton: false,
						timer: 1500,
					});
				}
				// New Bidded
				if (data.insertedId) {
					e.target.reset();
					bidModalRef.current.close();
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your Bid has been saved",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
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
				<button onClick={handleBidModalOpen} className="by-product-btn">
					I want Buy This Product
				</button>

				{/* Bid Popup */}
				<dialog
					ref={bidModalRef}
					className="modal modal-bottom sm:modal-middle"
				>
					<div className="modal-box bg-white max-w-[600px] p-8 shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)] rounded-lg">
						<h3 className="text-[24px] text-center font-bold mb-6">
							Give Seller Your Offered Price
						</h3>
						<form onSubmit={handleSubmitBid}>
							<div className="flex flex-col gap-6">
								{/* Name and Email */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="text-sm font-medium block mb-1.5">
											Buyer Name
										</label>
										<input
											type="text"
											placeholder="Your name"
											className="py-2 px-3 border border-[#E9E9E9] rounded w-full outline-none"
											name="name"
										/>
									</div>
									<div>
										<label className="text-sm font-medium block mb-1.5">
											Buyer Email
										</label>
										<input
											type="email"
											placeholder="Your Email"
											className="py-2 px-3 border border-[#E9E9E9] rounded w-full outline-none"
											name="email"
										/>
									</div>
								</div>
								{/* Buyer Image URL */}
								<div>
									<label className="text-sm font-medium block mb-1.5">
										Buyer Image URL
									</label>
									<input
										type="text"
										placeholder="https://...your_img_url"
										className="py-2 px-3 border border-[#E9E9E9] rounded w-full outline-none"
										name="photo"
									/>
								</div>
								{/* Price */}
								<div>
									<label className="text-sm font-medium block mb-1.5">
										Place your Price
									</label>
									<input
										type="text"
										placeholder="e.g. Artisan Roasters"
										className="py-2 px-3 border border-[#E9E9E9] rounded w-full outline-none"
										name="price"
									/>
								</div>
								{/* Contact INFO */}
								<div>
									<label className="text-sm font-medium block mb-1.5">
										Contact Info
									</label>
									<input
										type="text"
										placeholder="e.g. +1-555-1234"
										className="py-2 px-3 border border-[#E9E9E9] rounded w-full outline-none"
										name="contact"
									/>
								</div>
								{/* Buttons */}
								<div className="flex justify-end gap-3 mt-6">
									{/* Cancel Button */}
									<button
										onClick={() =>
											bidModalRef.current.close()
										}
										type="button"
										className="px-5 py-2 border border-purple-500 text-purple-600 font-medium rounded-md hover:bg-purple-50 transition"
									>
										Cancel
									</button>

									{/* Submit Button */}
									<button className="px-5 py-2 bg-linear-to-r from-purple-500 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition">
										Submit Bid
									</button>
								</div>
							</div>
						</form>
					</div>
				</dialog>
			</div>
		</div>
	);
};

export default RightSide;
