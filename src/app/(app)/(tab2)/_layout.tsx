import { Stack } from "expo-router";

const Tab2Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Tab 2 / Screen 1" }} />
		</Stack>
	);
};
export default Tab2Layout;
