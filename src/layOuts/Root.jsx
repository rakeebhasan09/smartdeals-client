import { Outlet, useLocation } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

const Root = () => {
	const location = useLocation();
	// Hide footer on specific routes
	const hideFooterRoutes = ["/login", "/register"];
	const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

	return (
		<>
			<ScrollTop />
			<section>
				<Navbar />
			</section>
			<main>
				<Outlet />
			</main>
			{!shouldHideFooter && (
				<section>
					<Footer />
				</section>
			)}
		</>
	);
};

export default Root;
