import { For } from "solid-js";
import { List, ListItem, ListIcon } from "@hope-ui/solid";
import { HiOutlineCheck } from "solid-icons/hi";
import { Heading } from "@hope-ui/solid";

export function BookList(props) {
	return (
		<>
			<Heading level={2} size="lg" mb="$4">
				My Books ({props.books.length})
			</Heading>
			<List pl="$4">
				<For each={props.books}>
					{({ title, author }) => {
						return (
							<ListItem color="$info10">
								<ListIcon
									as={HiOutlineCheck}
									color="$info10"
									fontWeight="$bold"
								/>
								{title} ({author})
							</ListItem>
						);
					}}
				</For>
			</List>
		</>
	);
}
