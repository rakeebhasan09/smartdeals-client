import { Link, NavLink } from "react-router";

const Navbar = () => {
	const menuLinks = (
		<>
			<li>
				<NavLink
					className="hover:bg-transparent p-0 text-[18px] md:text-[16px]"
					to={"/"}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent p-0 text-[18px] md:text-[16px]"
					to={"/all-products"}
				>
					All Products
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent p-0 text-[18px] md:text-[16px]"
					to={"/my-products"}
				>
					My Products
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent p-0 text-[18px] md:text-[16px]"
					to={"/my-bids"}
				>
					My Bids
				</NavLink>
			</li>
			<li>
				<NavLink
					className="hover:bg-transparent p-0 text-[18px] md:text-[16px]"
					to={"/create-product"}
				>
					Create Product
				</NavLink>
			</li>
		</>
	);
	return (
		<header className="bg-base-100 shadow-sm py-4">
			<div className="container">
				<div className="navbar min-h-0 p-0">
					{/* Navbar Start */}
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 gap-3 shadow"
							>
								{menuLinks}
							</ul>
						</div>
						<Link to="/" className="text-[32px] font-bold">
							Smart
							<span className="gradient-text">Deals</span>
						</Link>
					</div>
					{/* Navbar Center */}
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal gap-8 p-0">
							{menuLinks}
						</ul>
					</div>
					{/* Navbar End */}
					<div className="navbar-end">
						<ul className="flex items-center gap-4">
							<li>
								<Link className="w-[100px] block text-center py-3 font-semibold gradient-text border border-[#632EE3] rounded">
									Login
								</Link>
							</li>
							<li className="hidden sm:block">
								<Link className="w-[120px] block bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-center py-3 font-semibold rounded">
									Register
								</Link>
							</li>
						</ul>
						{/* <div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className="avatar">
								<div className="w-[43px] h-[43px] rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a>Profile</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div> */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
