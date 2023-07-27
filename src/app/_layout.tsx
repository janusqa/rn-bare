import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { Slot } from "expo-router";

import AppTheme from "@/navigation/theme";
import Screen from "../components/Screen";
import useProtectedRoute from "../hooks/useProtectedRoute";

void preventAutoHideAsync()
	.then((result) =>
		console.log(
			`SplashScreen.preventAutoHideAsync() succeeded: ${String(result)}`
		)
	)
	.catch((error) => console.log(error));

const RootLayout = () => {
	const [appIsReady, setIsappIsReady] = useState<boolean>(false);
	const [user, setUser] = useState<string | undefined>();

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) await hideAsync();
	}, [appIsReady]);

	useProtectedRoute(user);

	useEffect(function () {
		const initilizeSession = async () => {
			// Initilize user
			// if (!accessToken || !accessXsrf) return;
			await Promise.resolve();
			setUser("me@home.com");
		};

		// if (!!accessToken) return;

		void initilizeSession()
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsappIsReady(true);
			});
	}, []);

	if (!appIsReady) return null;

	return (
		<>
			<StatusBar style="auto" backgroundColor="transparent" />
			<Screen onLayoutRootView={onLayoutRootView}>
				<AppTheme.ThemeProvider value={AppTheme.theme}>
					<Slot />
				</AppTheme.ThemeProvider>
			</Screen>
		</>
	);
};

export default RootLayout;
