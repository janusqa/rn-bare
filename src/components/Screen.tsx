import {
	Platform,
	StatusBar as StatusBarRN,
	StyleSheet,
	SafeAreaView,
	type ViewStyle,
} from "react-native";

import COLORS from "../constants/colors";

interface Props {
	children: React.ReactNode;
	style?: ViewStyle;
	onLayoutRootView: () => Promise<void>;
}

const Screen = ({ children, onLayoutRootView }: Props) => {
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
		marginTop: Platform.OS === "android" ? StatusBarRN.currentHeight : 0,
		backgroundColor: COLORS.white,
	},
});
