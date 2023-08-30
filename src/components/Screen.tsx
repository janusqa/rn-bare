import { SafeAreaView, StyleSheet, type ViewStyle } from "react-native";

interface Props {
	children: React.ReactNode;
	style?: ViewStyle;
	onLayoutRootView?: () => void;
}

const Screen = ({ children }: Props) => {
	return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
