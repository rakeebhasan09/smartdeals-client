import { useState } from "react";
import { Link } from "react-router";

const CreateProduct = () => {
	const [condition, setCondition] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle your form logic here
		console.log("Form submitted");
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

					<form onSubmit={handleSubmit} className="space-y-5">
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
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Category
								</label>
								<select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none">
									<option>Select a Category</option>
									<option>Electronics</option>
									<option>Vehicles</option>
									<option>Furniture</option>
									<option>Others</option>
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
											checked={condition === "brand"}
											onChange={() =>
												setCondition("brand")
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
											checked={condition === "used"}
											onChange={() =>
												setCondition("used")
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
									placeholder="e.g. Artisan Roasters"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Email
								</label>
								<input
									type="email"
									placeholder="e.g. leila@gmail.com"
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
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
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Seller Image URL
								</label>
								<input
									type="url"
									placeholder="https://..."
									className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
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
