import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { Slot } from "expo-router";
import * as Notifications from "expo-notifications";

import AppTheme from "@/navigation/theme";
import Screen from "../components/Screen";

Notifications.setNotificationHandler({
	handleNotification: () =>
		Promise.resolve({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		}),
});

preventAutoHideAsync()
	.then((result) =>
		console.log(
			`SplashScreen.preventAutoHideAsync() succeeded: ${String(result)}`
		)
	)
	.catch((error) => console.log(error));

function useNotificationObserver() {
	useEffect(() => {
		let isMounted = true;

		function redirect(notification: Notifications.Notification) {
			console.log(notification.request.content.data);
		}

		void Notifications.getLastNotificationResponseAsync().then((response) => {
			if (!isMounted || !response?.notification) {
				return;
			}
			redirect(response?.notification);
		});

		const subscription = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				redirect(response.notification);
			}
		);

		return () => {
			isMounted = false;
			subscription.remove();
		};
	}, []);
}

const RootLayout = () => {
	useNotificationObserver();
	const [appIsReady, setAppIsReady] = useState<boolean>(false);

	const onLayoutRootView = useCallback(() => {
		if (appIsReady)
			hideAsync()
				.then((result) =>
					console.log(`SplashScreen.hideAsync() succeeded: ${String(result)}`)
				)
				.catch((error) => console.log(error));
	}, [appIsReady]);

	useEffect(
		function () {
			async function iniitilize() {
				try {
					await new Promise<null>((resolve) => {
						setTimeout(() => resolve(null), 2000);
					});
				} catch (error) {
					console.error(error);
				} finally {
					if (!appIsReady) setAppIsReady(true);
				}
			}

			void iniitilize();
		},
		[appIsReady]
	);

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
