import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuthActions } from "@/store/authStore";

const WelcomeScreen = () => {
	const { login } = useAuthActions();

	return (
		<View style={[styles.container]}>
			<Text>Welcome Screen</Text>
			<Pressable onPress={() => login("me@home.com")}>
				<Text style={{ color: "blue" }}>Sign in</Text>
			</Pressable>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
