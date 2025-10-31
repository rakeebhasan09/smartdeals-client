const Hero = () => {
	return (
		<section
			style={{
				backgroundImage:
					"url('https://i.ibb.co.com/pBHmCkRx/hero-bg.png')",
			}}
			className="bg-no-repeat bg-center bg-cover"
		>
			<div className="py-10 md:py-[50px] lg:py-[70px]">
				<div className="container">
					<div className="title max-w-[691px] mx-auto">
						<h2 className="text-[35px] md:text-[70px] lg:text-[72px] font-bold text-center capitalize leading-[116%]">
							Deal your{" "}
							<span className="gradient-text">Products</span> in a{" "}
							<span className="gradient-text">Smart</span> way !
						</h2>
					</div>
					<p className="text-[#627382] text-[20px] text-center mt-4">
						SmartDeals helps you sell, resell, and shop from trusted
						local sellers — all in one place!
					</p>
					<div class="flex flex-col items-center justify-center gap-4 pt-8">
						<div class="flex items-center w-[500px] max-w-full bg-white rounded-full shadow-sm overflow-hidden">
							<input
								type="text"
								placeholder="search For Products, Categories..."
								class="grow px-6 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
							/>
							<button class="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-full text-white flex items-center justify-center mr-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
									/>
								</svg>
							</button>
						</div>

						<div class="flex flex-col md:flex-row gap-4">
							<button class="px-6 py-2 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-md shadow-md hover:opacity-90 transition">
								Watch All Products
							</button>
							<button class="px-6 py-2 border-2 border-[#9F62F2] text-[#9F62F2] rounded-md hover:bg-[#9F62F2] hover:text-white transition">
								Post an Product
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
