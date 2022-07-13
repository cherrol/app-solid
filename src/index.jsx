/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";

const CustomThemeConfig = {
	initialColorMode: "light",
	darkTheme: {
		colors: {
			primary1: "#fefcff",
			primary12: "#340c3b",
		},
	},
	lightTheme: {
		colors: {
			primary1: "#1d131d",
			primary12: "#fbecfc",
		},
	},
};

render(
	() => (
		<HopeProvider config={CustomThemeConfig}>
			<Router>
				<App />
			</Router>
		</HopeProvider>
	),
	document.getElementById("root")
);
