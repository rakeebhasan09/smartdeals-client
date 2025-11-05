import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EditProduct = () => {
	const product = useLoaderData();
	const [productCondition, setProductCondition] = useState(product.condition);
	const { _id } = product;
	const navigate = useNavigate();
	const handleEditProduct = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const price_min = e.target.price_min.value;
		const price_max = e.target.price_max.value;
		const email = e.target.seller_email.value;
		const category = e.target.category.value;
		const image = e.target.photo.value;
		const location = e.target.location.value;
		const seller_image = e.target.seller_image.value;
		const seller_name = e.target.seller_name.value;
		const condition = productCondition;
		const usage = e.target.usage_time.value;
		const description = e.target.description.value;
		const seller_contact = e.target.seller_contact.value;

		const updateProduct = {
			title,
			price_min,
			price_max,
			email,
			category,
			image,
			location,
			seller_image,
			seller_name,
			condition,
			usage,
			description,
			seller_contact,
		};

		fetch(`https://smart-deals-server-kappa.vercel.app/products/${_id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					navigate("/my-products");
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your Product has been updated.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="flex items-center justify-center px-4">
				<div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-8">
					<Link
						to="/my-products"
						className="text-sm text-gray-600 hover:text-purple-600 font-medium"
					>
						← Back To Products
					</Link>

					<h2 className="text-2xl font-bold text-center mt-3 mb-8">
						Update{" "}
						<span className="text-purple-600">A Product</span>
					</h2>

					<form onSubmit={handleEditProduct} className="space-y-5">
						{/* Title & Category */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Title
								</label>
								<input
									type="text"
									placeholder="e.g. Yamaha Fz Guitar for Sale"
									defaultValue={product.title}
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
									defaultValue={product.category}
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
									defaultValue={product.price_min}
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
									defaultValue={product.price_max}
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
									defaultValue={product.usage}
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
								defaultValue={product.image}
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
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									name="seller_name"
									defaultValue={product.seller_name}
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Email
								</label>
								<input
									type="email"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
									defaultValue={product.email}
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
									defaultValue={product.seller_contact}
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
									defaultValue={product.seller_image}
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
								defaultValue={product.location}
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
								defaultValue={product.description}
								rows="10"
								className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								name="description"
							></textarea>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full mt-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-purple-500 to-purple-600 hover:opacity-90 transition"
						>
							Update A Product
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EditProduct;
