import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";

const secureAxiosInstance = axios.create({
	baseURL: "https://smart-deals-server-kappa.vercel.app",
});

const useAxiosSecure = () => {
	const { user, logOut } = useAuth();
	useEffect(() => {
		// Request Interceptor
		const requestInterceptor = secureAxiosInstance.interceptors.request.use(
			(config) => {
				if (user?.accessToken) {
					config.headers.Authorization = `Bearer ${user.accessToken}`;
				}
				return config;
			}
		);

		// Response Interceptor
		const responseInterceptor =
			secureAxiosInstance.interceptors.response.use(
				(res) => {
					return res;
				},
				(err) => {
					const status = err.status;
					if (status === 401 || status === 403) {
						logOut().then(() => {
							toast.warn("Please login again.");
						});
					}
				}
			);

		return () => {
			secureAxiosInstance.interceptors.request.eject(requestInterceptor);
			secureAxiosInstance.interceptors.response.eject(
				responseInterceptor
			);
		};
	}, [user, logOut]);

	return secureAxiosInstance;
};

export default useAxiosSecure;
