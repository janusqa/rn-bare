import { useCallback } from "react";
import { Linking, Alert, Platform } from "react-native";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as IntentLauncher from "expo-intent-launcher";

const openSettings = () => {
	if (Platform.OS === "ios") void Linking.openURL("app-settings:");
	if (Platform.OS === "android") {
		const pkg =
			(Constants.expoConfig?.extra?.releaseChannel as string) ??
			Constants.expoConfig?.android?.package ??
			"host.exp.exponent";
		void IntentLauncher.startActivityAsync(
			IntentLauncher.ActivityAction.APPLICATION_DETAILS_SETTINGS,
			{ data: `package:${pkg}` }
		);
	}
};

const openPermissionAlert = (permission: string, reason: string) => {
	Alert.alert(
		"Permission needed",
		`This app does not have permission to access your ${permission}. ${reason}`,
		[
			{
				text: "Cancel",
				style: "cancel",
			},
			{ text: "Open Settings", onPress: () => openSettings() },
		]
	);
};

export const usePushNotificationsPermission = () => {
	const [permission, requestPermission] = Notifications.usePermissions();

	const requestPushNotificationsPermission = useCallback(async () => {
		if (permission?.granted) return true;
		if (permission?.status === "undetermined" || permission?.canAskAgain) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (!permission?.granted && permission?.canAskAgain)
			openPermissionAlert(
				"Notifications",
				"Please allow access to send you notifications when someone matches with your or sends you a message"
			);

		return false;
	}, [
		permission?.canAskAgain,
		permission?.granted,
		permission?.status,
		requestPermission,
	]);
	return { requestPushNotificationsPermission };
};
