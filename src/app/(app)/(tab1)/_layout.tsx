import { Stack } from "expo-router";

const Tab1Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Tab 1 / Screen 1" }} />
		</Stack>
	);
};
export default Tab1Layout;
