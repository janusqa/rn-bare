import { StatusBar } from "expo-status-bar";
// import { useCallback, useEffect, useState } from "react";
// import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { Slot } from "expo-router";

// import AppTheme from "@/navigation/theme";
import Screen from "../components/Screen";

// preventAutoHideAsync()
// 	.then((result) =>
// 		console.log(
// 			`SplashScreen.preventAutoHideAsync() succeeded: ${String(result)}`
// 		)
// 	)
// 	.catch((error) => console.log(error));

const RootLayout = () => {
	// const [appIsReady, setAppIsReady] = useState<boolean>(false);

	// const onLayoutRootView = useCallback(() => {
	// 	if (appIsReady)
	// 		hideAsync()
	// 			.then((result) =>
	// 				console.log(`SplashScreen.hideAsync() succeeded: ${String(result)}`)
	// 			)
	// 			.catch((error) => console.log(error));
	// }, [appIsReady]);

	// useEffect(
	// 	function () {
	// 		async function iniitilize() {
	// 			try {
	// 				await new Promise<null>((resolve) => {
	// 					setTimeout(() => resolve(null), 2000);
	// 				});
	// 			} catch (error) {
	// 				console.warn(error);
	// 			} finally {
	// 				if (!appIsReady) setAppIsReady(true);
	// 			}
	// 		}

	// 		void iniitilize();
	// 	},
	// 	[appIsReady]
	// );

	// if (!appIsReady) return null;

	return (
		<>
			<StatusBar style="auto" backgroundColor="transparent" />
			{/* <Screen onLayoutRootView={onLayoutRootView}> */}
			<Screen>
				{/* <AppTheme.ThemeProvider value={AppTheme.theme}> */}
				<Slot />
				{/* </AppTheme.ThemeProvider> */}
			</Screen>
		</>
	);
};

export default RootLayout;
