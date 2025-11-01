import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	// Login With Google
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// Logout
	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = { googleLogin, user, logOut };
	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
