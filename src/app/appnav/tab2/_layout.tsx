import { Stack } from "expo-router";

export const unstable_settings = {
	initialRouteName: "index",
};

const Tab2Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Tab 2 / Screen 1" }} />
			<Stack.Screen
				name="tab2screen2"
				options={{ title: "Tab 2 / Screen 2" }}
			/>
		</Stack>
	);
};
export default Tab2Layout;
