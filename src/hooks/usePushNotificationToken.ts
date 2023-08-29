import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { isDevice } from "expo-device";
import { Platform } from "react-native";

import COLORS from "../constants/colors";
import { usePushNotificationsPermission } from "./usePermissions";
import { env as envrionment } from "@/env";

const usePushNotifcationToken = () => {
	const env = envrionment();
	const [pushToken, setPushToken] = useState<string | null>();
	const { requestPushNotificationsPermission } =
		usePushNotificationsPermission();

	useEffect(
		function () {
			const getPushNotificationToken = async () => {
				try {
					if (Platform.OS === "android") {
						await Notifications.setNotificationChannelAsync("default", {
							name: "default",
							importance: Notifications.AndroidImportance.MAX,
							vibrationPattern: [0, 250, 250, 250],
							lightColor: COLORS.primary,
						});
					}

					const hasPermission = await requestPushNotificationsPermission();
					if (hasPermission && isDevice) {
						const token = await Notifications.getExpoPushTokenAsync({
							projectId: env.EXPO_PUBLIC_CONFIG_PROJECTID,
						});
						setPushToken(token.data);
					}
				} catch (error) {
					console.log(error);
				}
			};

			void getPushNotificationToken();
		},
		[env.EXPO_PUBLIC_CONFIG_PROJECTID, requestPushNotificationsPermission]
	);
	return pushToken;
};

export default usePushNotifcationToken;
