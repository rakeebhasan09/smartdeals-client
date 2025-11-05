import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const secureAxiosInstance = axios.create({
	baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
	const { user, logOut } = useAuth();
	const interceptorAdded = useRef(false);

	useEffect(() => {
		if (interceptorAdded.current) return; // prevent multiple setups
		interceptorAdded.current = true;
		// Request Interceptor
		const requestInterceptor = secureAxiosInstance.interceptors.request.use(
			(config) => {
				config.headers.authorization = `Bearer ${user.accessToken}`;
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
