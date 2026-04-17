import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
			}}
		>
			<Tabs.Screen
				name="tab1"
				options={{
					href: "/appnav/tab1",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="tab-plus" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="tab2"
				options={{
					href: "/appnav/tab2",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="tab-minus"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};
export default AppLayout;
