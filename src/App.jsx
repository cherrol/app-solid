// import logo from "./logo.svg";
import { Container, Box, globalCss } from "@hope-ui/solid";
import { Routes, Route } from "solid-app-router";
import { lazy } from "solid-js";

const globalStyle = globalCss({
	"*": {
		boxSizing: "border-box",
	},
});

function App() {
	globalStyle();

	return (
		<Container d="block" p="$4">
			<Box>
				<Routes>
					<Route path="/" component={lazy(() => import("@pages/index"))} />
					<Route path="/counter" component={lazy(() => import("@pages/counter"))} />
					<Route path="/book" component={lazy(() => import("@pages/book/Book"))} />
				</Routes>
			</Box>
		</Container>
	);
}

export default App;
