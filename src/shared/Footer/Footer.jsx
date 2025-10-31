import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="pt-10 md:pt-14 lg:pt-20 pb-[30px] bg-primary">
			<div className="container">
				{/* Footer Top Area */}
				<div className="grid grid-cols-1 lg:grid-cols-12 pb-10 md:pb-14 lg:pb-20 border-b border-b-[rgba(229,231,235,0.2)]">
					<div className="col-span-12 lg:col-span-3">
						<h2 className="text-[24px] text-white font-bold mb-4">
							Smart<span className="gradient-text">Deals</span>
						</h2>
						<p className="text-[#A1A1AA]">
							Your trusted marketplace for authentic local
							products. Discover the best deals from across
							Bangladesh.
						</p>
					</div>
					<div className="col-span-12 lg:col-span-9 mt-5 lg:mt-0">
						<div className="grid grid-cols-1 md:grid-cols-12">
							{/* Footer Links */}
							<div className="md:col-span-5 lg:col-span-5">
								<div className="flex justify-between md:justify-start md:gap-8 lg:justify-around">
									<FooterLinks
										title="Quick Links"
										link1="All Products"
										link2="Dashboard"
										link3="Login"
										link4="Register"
									/>
									<FooterLinks
										title="Categories"
										link1="Electronics"
										link2="Fashion"
										link3="Home & Living"
										link4="Groceries"
									/>
								</div>
							</div>
							<div className="md:col-span-7 lg:col-span-7 mt-5 md:mt-0">
								<div className="flex flex-col md:flex-row gap-5 justify-around">
									{/* Contact Information */}
									<div>
										<h2 className="text-white text-[20px] font-medium mb-4">
											Contact & Support
										</h2>
										<ul className="flex flex-col gap-4">
											<li className="flex items-center gap-2">
												<FaRegEnvelope className="text-white" />
												<span className="text-[#A1A1AA]">
													support@Smartdeals.com
												</span>
											</li>
											<li className="flex items-center gap-2">
												<BsTelephone className="text-white" />
												<span className="text-[#A1A1AA]">
													+880 123 456 789
												</span>
											</li>
											<li className="flex items-center gap-2">
												<IoLocationOutline className="text-white" />
												<span className="text-[#A1A1AA]">
													+880 123 456 789
												</span>
											</li>
										</ul>
									</div>
									{/* Social Links */}
									<div>
										<h2 className="text-white text-[20px] font-medium mb-4">
											Social Links
										</h2>
										<ul className="flex items-center gap-4">
											<li>
												<Link className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFFFFF]">
													<FaXTwitter className="text-black text-[24px]" />
												</Link>
											</li>
											<li>
												<Link className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFFFFF]">
													<FaLinkedinIn className="text-black text-[24px]" />
												</Link>
											</li>
											<li>
												<Link className="w-10 h-10 rounded-full flex items-end justify-center bg-[#FFFFFF]">
													<FaFacebookF className="text-black text-[30px]" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<p className="text-[#FAFAFA] text-center pt-[30px]">
					© 2025 SmartDeals. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
