import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Tab1Screen1 = () => {
	useEffect(() =>
		console.log("accessing protected screen tab 1 / screen 1...")
	);

	return (
		<View style={[styles.container]}>
			<Text>Tab 1 / Screen 1</Text>
		</View>
	);
};

export default Tab1Screen1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
