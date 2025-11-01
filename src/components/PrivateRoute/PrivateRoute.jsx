import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();

	if (loading) {
		return <p>Loading.......</p>;
	}

	if (!user) {
		return <Navigate to="/login" state={location.pathname} />;
	}

	return children;
};

export default PrivateRoute;
