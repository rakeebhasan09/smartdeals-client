import { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyBids = () => {
	const [bids, setBids] = useState([]);
	const { user } = use(AuthContext);
	useEffect(() => {
		fetch(`http://localhost:3000/bids?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setBids(data);
			});
	}, [user.email]);
	return (
		<section className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<h2 className="md:text-[48px] font-bold text-center">
					My Bids:{" "}
					<span className="gradient-text">{bids.length}</span>
				</h2>
				<div className="overflow-x-auto bg-white rounded-lg shadow-sm mt-6">
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
									Status
								</th>
								<th className="px-4 py-3 font-semibold">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{bids.map((bid, idx) => (
								<tr
									key={bid._id}
									className="border-b border-b-[#E9E9E9] hover:bg-gray-50 transition-colors"
								>
									<td className="px-4 py-3">{idx + 1}</td>
									<td className="px-4 py-3">
										<div className="flex items-center gap-3">
											<div className="w-[60px] h-10 bg-[#D9D9D9]"></div>
											<div>
												<p>Orange Juice</p>
												<span>$22.5</span>
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
										<span className="bg-yellow-400/30 text-yellow-800 px-3 py-1 rounded-md text-xs font-semibold">
											{bid.status}
										</span>
									</td>
									<td className="px-4 py-3">
										<button className="text-red-500 border border-red-400 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
											Remove Bid
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default MyBids;
