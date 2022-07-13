import { Heading, Anchor, Box } from "@hope-ui/solid";
import { Link } from "solid-app-router";

export default function HelloSolid() {
	return (
    <>
      <Heading level={1} size="2xl" fontWeight={"$bold"}>
        Hello Solid!
      </Heading>
      <Box>
        <Anchor as={Link} href="/book">
          跳转 book
        </Anchor>
      </Box>
      <Box>
        <Anchor as={Link} href="/counter">
          跳转 counter
        </Anchor>
      </Box>
    </>
	);
}
