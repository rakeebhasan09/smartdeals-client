import Hero from "./Hero/Hero";
import RecentProducts from "./RecentProducts/RecentProducts";

const recentProductsPromise = fetch(
	"http://localhost:3000/recent-products"
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
