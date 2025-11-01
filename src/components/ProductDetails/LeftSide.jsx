const LeftSide = ({ product }) => {
	const { condition, usage, description, image } = product;
	return (
		<div>
			{/* Photo */}
			<div className="rounded-lg overflow-hidden">
				<img src={image} alt="" />
			</div>
			{/* Describetions */}
			<div className="p-6 bg-white rounded-lg mt-[30px] flex flex-col gap-6">
				<h2 className="text-[24px] font-semibold leading-[100%]">
					Product Description
				</h2>
				<div className="flex flex-col md:flex-row lg:items-center justify-between pt-0 md:pt-[13px] pb-[13px] border-b border-b-[#444]">
					<p className="font-semibold">
						<span className="gradient-text">Condition :</span>{" "}
						{condition}
					</p>
					<p className="font-semibold">
						<span className="gradient-text">Usage Time :</span>{" "}
						{usage}
					</p>
				</div>
				<div>
					<p className="text-[#969A9D] font-medium">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
