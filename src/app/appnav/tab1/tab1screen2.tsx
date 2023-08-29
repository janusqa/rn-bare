import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Tab1Screen2 = () => {
	useEffect(
		() => console.log("accessing protected screen tab 1 / screen 2..."),
		[]
	);

	return (
		<View style={[styles.container]}>
			<Text>Tab 1 / Screen 2</Text>
		</View>
	);
};

export default Tab1Screen2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
