import { useRootNavigation } from "expo-router";
import { useEffect, useState } from "react";

const useNavigationReady = () => {
	const [isNavigationReady, setNavigationReady] = useState<boolean>(false);
	const rootNavigation = useRootNavigation();

	useEffect(
		function () {
			const unsubscribe = rootNavigation?.addListener("state", () => {
				setNavigationReady(true);
			});

			return function () {
				if (unsubscribe) {
					// setNavigationReady(false);
					unsubscribe();
				}
			};
		},
		[rootNavigation]
	);

	return isNavigationReady;
};

export default useNavigationReady;
