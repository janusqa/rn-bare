import { useEffect } from "react";
import { useSegments, router, useRootNavigationState } from "expo-router";
import { useUser } from "@/store/authStore";

const useProtectedRoute = () => {
	const user = useUser();
	const segments = useSegments();
	const navigationState = useRootNavigationState();

	useEffect(
		function () {
			if (!!!navigationState.key) return;

			const inAuthGroup = segments[0] === "authnav";
			const isLoggedIn = user ? true : false;
			if (!isLoggedIn && !inAuthGroup) router.replace("/authnav");
			else if (isLoggedIn && inAuthGroup) router.replace("/appnav/tab1");
		},
		[segments, user, navigationState.key]
	);

	return !!navigationState.key;
};

export default useProtectedRoute;
