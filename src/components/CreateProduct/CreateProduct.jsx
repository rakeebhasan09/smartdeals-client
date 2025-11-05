import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAxios from "../../hooks/useAxios";

const CreateProduct = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	// const axiosInstance = useAxios();
	const axiosSecure = useAxiosSecure();

	const [productCondition, setProductCondition] = useState(null);
	// const navigate = useNavigate();
	const handleCreateProduct = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const price_min = e.target.price_min.value;
		const price_max = e.target.price_max.value;
		const email = e.target.seller_email.value;
		const category = e.target.category.value;
		const created_at = new Date();
		const image = e.target.photo.value;
		const status = "pending";
		const location = e.target.location.value;
		const seller_image = e.target.seller_image.value;
		const seller_name = e.target.seller_name.value;
		const condition = productCondition;
		const usage = e.target.usage_time.value;
		const description = e.target.description.value;
		const seller_contact = e.target.seller_contact.value;

		const newProduct = {
			title,
			price_min,
			price_max,
			email,
			category,
			created_at,
			image,
			status,
			location,
			seller_image,
			seller_name,
			condition,
			usage,
			description,
			seller_contact,
		};

		// Send Data Using useAxios custom hook
		axiosSecure.post("/products", newProduct).then((data) => {
			if (data.data.insertedId) {
				e.target.reset();
				navigate("/my-products");
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your Product has been saved",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});

		// Send Data using axios
		// axios
		// 	.post("https://smart-deals-server-kappa.vercel.app/products", newProduct)
		// 	.then((data) => {
		// 		if (data.data.insertedId) {
		// 			e.target.reset();
		// 			navigate("/my-products");
		// 			Swal.fire({
		// 				position: "center",
		// 				icon: "success",
		// 				title: "Your Product has been saved",
		// 				showConfirmButton: false,
		// 				timer: 1500,
		// 			});
		// 		}
		// 	});

		// Send Product Server side
		// fetch("https://smart-deals-server-kappa.vercel.app/products", {
		// 	method: "post",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(newProduct),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		if (data.insertedId) {
		// 			e.target.reset();
		// 			navigate("/my-products");
		// 			Swal.fire({
		// 				position: "center",
		// 				icon: "success",
		// 				title: "Your Product has been saved",
		// 				showConfirmButton: false,
		// 				timer: 1500,
		// 			});
		// 		}
		// 	});
	};

	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="flex items-center justify-center px-4">
				<div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-8">
					<Link
						to="/all-products"
						className="text-sm text-gray-600 hover:text-purple-600 font-medium"
					>
						← Back To Products
					</Link>

					<h2 className="text-2xl font-bold text-center mt-3 mb-8">
						Create{" "}
						<span className="text-purple-600">A Product</span>
					</h2>

					<form onSubmit={handleCreateProduct} className="space-y-5">
						{/* Title & Category */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Title
								</label>
								<input
									type="text"
									placeholder="e.g. Yamaha Fz Guitar for Sale"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="title"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Category
								</label>
								<select
									name="category"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								>
									<option value="">Select a Category</option>
									<option value="Electronics">
										Electronics
									</option>
									<option value="Vehicles">Vehicles</option>
									<option value="Furniture">Furniture</option>
									<option value="Others">Others</option>
								</select>
							</div>
						</div>

						{/* Price */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Min Price You want to Sale ($)
								</label>
								<input
									type="number"
									placeholder="e.g. 18.5"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="price_min"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Max Price You want to Sale ($)
								</label>
								<input
									type="number"
									placeholder="Optional (default = Min Price)"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="price_max"
								/>
							</div>
						</div>

						{/* Product Condition & Usage */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Product Condition
								</label>
								<div className="flex items-center gap-5">
									<label className="flex items-center gap-2">
										<input
											type="radio"
											name="condition"
											checked={
												productCondition === "brand"
											}
											onChange={() =>
												setProductCondition("brand")
											}
											className="text-purple-600 "
										/>
										<span className="text-gray-700">
											Brand New
										</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											type="radio"
											name="condition"
											checked={
												productCondition === "used"
											}
											onChange={() =>
												setProductCondition("used")
											}
											className="text-purple-600 "
										/>
										<span className="text-gray-700">
											Used
										</span>
									</label>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Product Usage Time
								</label>
								<input
									type="text"
									placeholder="e.g. 1 year 3 months"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="usage_time"
								/>
							</div>
						</div>

						{/* Image URL */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Your Product Image URL
							</label>
							<input
								type="url"
								placeholder="https://..."
								className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								name="photo"
							/>
						</div>

						{/* Seller Info */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Name
								</label>
								<input
									type="text"
									defaultValue={user?.displayName}
									readOnly
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="seller_name"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Email
								</label>
								<input
									type="email"
									defaultValue={user?.email}
									readOnly
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="seller_email"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Contact
								</label>
								<input
									type="text"
									placeholder="e.g. +1-555-1234"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="seller_contact"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Image URL
								</label>
								<input
									type="url"
									defaultValue={user?.photoURL}
									readOnly
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="seller_image"
								/>
							</div>
						</div>

						{/* Location */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Location
							</label>
							<input
								type="text"
								placeholder="City, Country"
								className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								name="location"
							/>
						</div>

						{/* Description */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Simple Description about your Product
							</label>
							<textarea
								placeholder="e.g. I bought this product 3 months ago..."
								rows="3"
								className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								name="description"
							></textarea>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full mt-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-purple-500 to-purple-600 hover:opacity-90 transition"
						>
							Create A Product
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CreateProduct;
