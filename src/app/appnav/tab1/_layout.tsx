import { Stack } from "expo-router";

export const unstable_settings = {
	initialRouteName: "index",
};

const Tab1Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Tab 1 / Screen 1" }} />
			<Stack.Screen
				name="tab1screen2"
				options={{ title: "Tab 1 / Screen 2" }}
			/>
		</Stack>
	);
};
export default Tab1Layout;
