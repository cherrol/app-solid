import { createSignal } from "solid-js";
import { Box, Button, Flex, Anchor } from "@hope-ui/solid";
import { Link } from "solid-app-router";

export default function Counter() {
	const [count, setCount] = createSignal(0);

	const increment = () => {
		setCount(count() + 1);
	};

	return (
		<Box>
      <Box>
        <Anchor as={Link} href="/">
          跳转 Index
        </Anchor>
      </Box>
      <Flex alignItems="center">
        <Box>Current Count: {count()}</Box>
        <Box ml="$4">
          <Button colorScheme="info" onClick={increment}>
            Increment
          </Button>
        </Box>
      </Flex>
		</Box>
	);
}
