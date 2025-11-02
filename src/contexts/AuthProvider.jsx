import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	// Login With Google
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Email Password Register
	const registerWithEmailPassword = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Email Password Login
	const loginWithEmailPassword = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Update Profile
	const updateUserProfile = (userInfo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, userInfo);
	};

	// Logout
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = {
		googleLogin,
		registerWithEmailPassword,
		loginWithEmailPassword,
		updateUserProfile,
		user,
		setUser,
		logOut,
		loading,
	};
	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
