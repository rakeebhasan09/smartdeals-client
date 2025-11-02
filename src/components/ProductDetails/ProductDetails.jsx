import { useLoaderData } from "react-router";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useEffect, useState } from "react";

const ProductDetails = () => {
	const product = useLoaderData();
	const [totalBids, setTotalBids] = useState([]);
	const { _id } = product;

	useEffect(() => {
		fetch(`http://localhost:3000/bids/${_id}`)
			.then((res) => res.json())
			.then((data) => {
				setTotalBids(data);
			});
	}, [_id]);

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
					<div className="mt-10 md:mt-20 lg:mt-40">
						<h3 className="md:text-[48px] font-bold pb-5 md:pb-10">
							Bids For This Products:{" "}
							<span className="gradient-text">
								{totalBids.length < 10
									? `0${totalBids.length}`
									: totalBids.length}
							</span>
						</h3>
						<div className="overflow-x-auto bg-white rounded-lg shadow-sm ">
							<table className="min-w-full text-left text-sm text-gray-700">
								<thead className="bg-gray-100 text-gray-600 text-sm uppercase">
									<tr>
										<th className="px-4 py-3 font-semibold">
											SL No
										</th>
										<th className="px-4 py-3 font-semibold">
											Product
										</th>
										<th className="px-4 py-3 font-semibold">
											Seller
										</th>
										<th className="px-4 py-3 font-semibold">
											Bid Price
										</th>
										<th className="px-4 py-3 font-semibold">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{totalBids.map((bid, idx) => (
										<tr
											key={bid._id}
											className="border-b border-b-[#E9E9E9] hover:bg-gray-50 transition-colors"
										>
											<td className="px-4 py-3">
												{idx + 1}
											</td>
											<td className="px-4 py-3">
												<div className="flex items-center gap-3">
													<div className="w-[60px] h-10 bg-[#D9D9D9]"></div>
													<div>
														<p>Orange Juice</p>
														<span>
															{bid.product}
														</span>
													</div>
												</div>
											</td>
											<td className="px-4 py-3">
												<div className="flex items-center gap-3">
													<div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
													<div>
														<p>Sara Chen</p>
														<span>
															crafts.by.sara@shop.net
														</span>
													</div>
												</div>
											</td>
											<td className="px-4 py-3 font-medium">
												${bid.bid_price}
											</td>
											<td className="px-4 py-3">
												<button className="text-[#4CAF50] mr-2 border border-[#4CAF50] px-3 py-1 rounded-md hover:bg-[#4CAF50] hover:text-white transition">
													Accept Offer
												</button>
												<button className="text-red-500 border border-red-400 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
													Reject offer
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductDetails;
