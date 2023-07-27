import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
	return (
		<View style={[styles.container]}>
			<Text>Welcome Screen</Text>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
