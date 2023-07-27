import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Tab2Screen1 = () => {
	useEffect(() =>
		console.log("accessing protected screen tab 2 / screen 1...")
	);
	return (
		<View style={[styles.container]}>
			<Text>Tab 2 / Screen 1</Text>
		</View>
	);
};

export default Tab2Screen1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
