import Hero from "./Hero/Hero";
import RecentProducts from "./RecentProducts/RecentProducts";

const recentProductsPromise = fetch(
	"https://smart-deals-server-kappa.vercel.app/recent-products"
).then((res) => res.json());

const Home = () => {
	return (
		<>
			<Hero />
			<RecentProducts recentProductsPromise={recentProductsPromise} />
		</>
	);
};

export default Home;
