import { useEffect } from "react";
import { useSegments, router } from "expo-router";

import useNavigationReady from "./useNavigationReady";

const useProtectedRoute = (user: string | undefined) => {
	const segments = useSegments();

	const isNavigationReady = useNavigationReady();

	useEffect(
		function () {
			const isAuthGroup = segments[0] === "(auth)";
			if (isNavigationReady) {
				if (!user && !isAuthGroup) {
					router.replace("/(auth)");
				} else if (user && isAuthGroup) {
					router.replace("/(app)/(tab2)");
				}
			}
		},
		[segments, user, isNavigationReady]
	);
};

export default useProtectedRoute;
