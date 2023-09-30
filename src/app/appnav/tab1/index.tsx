import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Tab1Screen1 = () => {
	useEffect(
		() => console.log("accessing protected screen tab 1 / screen 1..."),
		[]
	);

	return (
		<View style={[styles.container]}>
			<Text>Tab 1 / Screen 1</Text>
			<Pressable
				onPress={() => router.push({ pathname: "/appnav/tab1/tab1screen2" })}
			>
				<Text style={styles.link}>Go to Tab 1 / Screen 2</Text>
			</Pressable>
			<Pressable onPress={() => router.replace({ pathname: "/appnav/tab2/" })}>
				<Text style={styles.link}>Go to Tab 2 / Screen 1</Text>
			</Pressable>
			<Pressable
				onPress={() => router.replace({ pathname: "/appnav/tab2/tab2screen2" })}
			>
				<Text style={styles.link}>Go to Tab 2 / Screen 2</Text>
			</Pressable>
		</View>
	);
};

export default Tab1Screen1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	link: {
		fontSize: 20,
		margin: 20,
		color: "blue",
	},
});
