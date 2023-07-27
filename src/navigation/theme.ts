import {
	ThemeProvider,
	DarkTheme,
	DefaultTheme,
	useTheme,
} from "@react-navigation/native";
import COLORS from "../constants/colors";

const navigationTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: COLORS.primary,
		background: COLORS.white,
	},
};

export default { theme: navigationTheme, ThemeProvider, DarkTheme, useTheme };
