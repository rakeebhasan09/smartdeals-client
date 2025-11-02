import { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyProducts = () => {
	const { user } = use(AuthContext);
	const [myProducts, setMyProducts] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:3000/products?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setMyProducts(data));
	}, [user.email]);

	// Handle Delete
	const handleDeleteMyProdutcs = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/products/${id}`, {
					method: "delete",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							const remaining = myProducts.filter(
								(myProduct) => myProduct._id !== id
							);
							setMyProducts(remaining);
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
						}
					});
			}
		});
	};
	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<h2 className="md:text-[48px] font-bold text-center mb-5 md:mb-10">
					My Products:{" "}
					<span className="gradient-text">
						{myProducts.length < 10
							? `0${myProducts.length}`
							: myProducts.length}
					</span>
				</h2>
				{/* Data Table */}
				<div className="w-full max-w-6xl overflow-x-auto bg-white rounded-xl shadow">
					<table className="min-w-full border-collapse">
						<thead>
							<tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
								<th className="py-3 px-4">SL No</th>
								<th className="py-3 px-4">Image</th>
								<th className="py-3 px-4">Product Name</th>
								<th className="py-3 px-4">Category</th>
								<th className="py-3 px-4">Price</th>
								<th className="py-3 px-4">Status</th>
								<th className="py-3 px-4 text-center">
									Actions
								</th>
							</tr>
						</thead>

						<tbody>
							{myProducts.length > 0 ? (
								myProducts.map((item, index) => (
									<tr
										key={item._id}
										className="border-b border-b-[#E9E9E9] hover:bg-gray-50 transition duration-200"
									>
										<td className="py-3 px-4">
											{index < 10
												? `0${index + 1}`
												: index + 1}
										</td>
										<td className="py-3 px-4">
											<img
												src={item.image}
												alt={item.name}
												className="w-10 h-10 rounded-md object-cover"
											/>
										</td>
										<td className="py-3 px-4">
											{item.title}
										</td>
										<td className="py-3 px-4">
											{item.category}
										</td>
										<td className="py-3 px-4">
											${item.price_min} - {item.price_max}
										</td>
										<td className="py-3 px-4">
											<span className="bg-yellow-400 text-white text-xs font-medium px-3 py-1 rounded-full">
												{item.status}
											</span>
										</td>
										<td className="py-3 px-4">
											<p className="flex items-center justify-center gap-2">
												<Link
													to={`/edit-product/${item._id}`}
													className="border border-purple-600 text-purple-600 text-sm px-3 py-1 rounded hover:bg-purple-600 hover:text-white transition"
												>
													Edit
												</Link>
												<button
													onClick={() =>
														handleDeleteMyProdutcs(
															item._id
														)
													}
													className="border border-red-500 text-red-500 text-sm px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
												>
													Delete
												</button>
												<button className="border border-green-500 text-green-500 text-sm px-3 py-1 rounded hover:bg-green-500 hover:text-white transition">
													Make Sold
												</button>
											</p>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan={7}
										className="text-center py-4 text-[20px]"
									>
										No Data Found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default MyProducts;
