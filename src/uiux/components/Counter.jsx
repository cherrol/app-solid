import { Box, Button, Flex } from "@hope-ui/solid";
import { createSignal } from "solid-js";

export default function Counter() {
	const [count, setCount] = createSignal(0);

	const increment = () => {
		setCount(count() + 1);
	};

	return (
		<Flex alignItems="center">
			<Box>Current Count: {count()}</Box>
			<Box ml="$4">
				<Button colorScheme="info" onClick={increment}>
					Increment
				</Button>
			</Box>
		</Flex>
	);
}
