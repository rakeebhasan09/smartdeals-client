import { Link } from "react-router";

const Register = () => {
	return (
		<section className="py-10 md:py-20 lg:py-[120px]">
			<div className="container">
				<div className="card bg-base-100 w-full mx-auto p-5 md:p-10 max-w-[492px] shrink-0 shadow-2xl">
					<h1 className="text-[32px] text-center font-semibold">
						Register Now!
					</h1>
					<p className="text-center ">
						Don't have an account?{" "}
						<Link to="/login" className="gradient-text">
							Login Now
						</Link>
					</p>
					<div className="card-body p-0">
						<fieldset className="fieldset mt-6">
							<label className="label text-primary font-medium text-[14px]">
								Name
							</label>
							<input
								type="text"
								className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
								placeholder="Mariam Swarna"
							/>
							<label className="label text-primary font-medium text-[14px]">
								Email
							</label>
							<input
								type="email"
								className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
								placeholder="smsowkothasan@gmail.com"
							/>
							<label className="label text-primary font-medium text-[14px]">
								Image-URL
							</label>
							<input
								type="email"
								className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
								placeholder="Photo URL here"
							/>
							<label className="label text-primary font-medium text-[14px]">
								Password
							</label>
							<input
								type="password"
								className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
								placeholder="*************"
							/>
							<button className="btn h-12 bg-[linear-gradient(80deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 text-white text-[16px] font-semibold mt-4">
								Login
							</button>
						</fieldset>
						<div className="divider">OR</div>
						{/* Google */}
						<button className="btn bg-white text-black border-[#e5e5e5]">
							<svg
								aria-label="Google logo"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g>
									<path d="m0 0H512V512H0" fill="#fff"></path>
									<path
										fill="#34a853"
										d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
									></path>
									<path
										fill="#4285f4"
										d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
									></path>
									<path
										fill="#fbbc02"
										d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
									></path>
									<path
										fill="#ea4335"
										d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
									></path>
								</g>
							</svg>
							Login with Google
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
