import { Heading, Anchor } from "@hope-ui/solid";
import { Link } from "solid-app-router";

export default function HelloSolid() {
	return (
		<Heading level={1} size="2xl" fontWeight={"$bold"}>
			Hello Solid!
			<Anchor as={Link} href="/book">
				跳转 book
			</Anchor>
			<Anchor as={Link} href="/counter">
				跳转 counter
			</Anchor>
		</Heading>
	);
}
