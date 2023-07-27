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
				name="(tab1)"
				options={{
					href: "/(app)/(tab1)",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(tab2)"
				options={{
					href: "/(app)/(tab2)",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="map-marker-radius"
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
