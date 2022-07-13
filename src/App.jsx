// import logo from "./logo.svg";
import { Container, Box, globalCss } from "@hope-ui/solid";
import { Routes, Route } from "solid-app-router";
import { lazy } from "solid-js";

const Book = lazy(() => import("@pages/book/Book"));
const HelloSolid = lazy(() => import("@components/HelloSolid"));
const Counter = lazy(() => import("@components/Counter"));

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
					<Route path="/" component={HelloSolid} />
					<Route path="/counter" component={Counter} />
					<Route path="/book" component={Book} />
				</Routes>
			</Box>
		</Container>
	);
}

export default App;
