import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
	return (
		<>
			<section>
				<Navbar />
			</section>
			<main>
				<Outlet />
			</main>
			<section>
				<Footer />
			</section>
		</>
	);
};

export default Root;
