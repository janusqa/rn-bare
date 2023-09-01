import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Tab2Screen1 = () => {
	useEffect(
		() => console.log("accessing protected screen tab 2 / screen 1..."),
		[]
	);
	return (
		<View style={[styles.container]}>
			<Text>Tab 2 / Screen 1</Text>
			<Pressable
				onPress={() => router.push({ pathname: "/appnav/tab2/tab2screen2" })}
			>
				<Text>Go to Tab 2 / Screen 2</Text>
			</Pressable>
		</View>
	);
};

export default Tab2Screen1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
