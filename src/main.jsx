import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layOuts/Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CreateProduct from "./components/CreateProduct/CreateProduct";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "all-products",
				loader: () => fetch("http://localhost:3000/products"),
				Component: AllProducts,
			},
			{
				path: "product-details/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/products/${params.id}`),
				element: (
					<PrivateRoute>
						<ProductDetails />
					</PrivateRoute>
				),
			},
			{
				path: "create-product",
				element: (
					<PrivateRoute>
						<CreateProduct />
					</PrivateRoute>
				),
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</AuthProvider>
	</StrictMode>
);
