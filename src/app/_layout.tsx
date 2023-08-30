import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import Screen from "../components/Screen";

const RootLayout = () => {
	return (
		<>
			<StatusBar style="auto" backgroundColor="transparent" />
			<Screen>
				<Slot />
			</Screen>
		</>
	);
};

export default RootLayout;
