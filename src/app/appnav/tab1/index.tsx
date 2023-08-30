import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Tab1Screen1 = () => {
	useEffect(
		() => console.log("accessing protected screen tab 1 / screen 1..."),
		[]
	);

	return (
		<View style={[styles.container]}>
			<Text>Tab 1 / Screen 1</Text>
			<Link style={styles.link} href="/appnav/tab2/">
				Go to Tab 2 / Screen 1
			</Link>
			<Link style={styles.link} href="/appnav/tab1/tab1screen2">
				Go to Tab 1 / Screen 2
			</Link>
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
