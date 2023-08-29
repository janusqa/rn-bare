import {
	// Platform,
	// StatusBar as StatusBarRN,
	SafeAreaView,
	StyleSheet,
	type ViewStyle,
} from "react-native";

import COLORS from "../constants/colors";
import useProtectedRoute from "@/hooks/useProtectedRoute";

interface Props {
	children: React.ReactNode;
	style?: ViewStyle;
	onLayoutRootView: () => void;
}

const Screen = ({ children, onLayoutRootView }: Props) => {
	useProtectedRoute();
	return (
		<SafeAreaView onLayout={onLayoutRootView} style={[styles.container]}>
			{children}
		</SafeAreaView>
	);
};

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: Platform.OS === "android" ? StatusBarRN.currentHeight : 0,
		backgroundColor: COLORS.white,
	},
});
