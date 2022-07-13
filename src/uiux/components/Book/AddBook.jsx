import { createResource, createSignal, Show, For } from "solid-js";
import {
	Button,
	Input,
	FormControl,
	Flex,
	Progress,
	ProgressIndicator,
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Td,
	Text,
	Anchor,
	Icon,
} from "@hope-ui/solid";
import { HiOutlineLink } from "solid-icons/hi";
import { searchBooks } from "../../../api/book";

export function AddBook(props) {
	// const [newBook, setNewBook] = createSignal(emptyBook);
	const [input, setInput] = createSignal("");
	const [query, setQuery] = createSignal("");

	const [data] = createResource(query, searchBooks);

	return (
		<>
			<FormControl>
				<Flex alignItems="center">
					<Flex alignItems="center" flex="auto">
						<Input
							flex="auto"
							id="title"
							placeholder="Please Input Something..."
							value={input()}
							onInput={(e) => {
								setInput(e.currentTarget.value);
								return;
							}}
						/>
					</Flex>
					<Button
						ml="$4"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							setQuery(input());
						}}
					>
						Search
					</Button>
				</Flex>
			</FormControl>

			<Box mt="$4">
				<Show
					when={!data.loading}
					fallback={
						<Progress size="xs" indeterminate>
							<ProgressIndicator />
						</Progress>
					}
				>
					<Table rounded={"$md"} shadow="$md">
						<Show when={data().length > 0}>
							<Thead position="sticky" top="0" zIndex="1" bg="#fff">
								<Tr>
									<Td />
									<Td>Title</Td>
									<Td>Author</Td>
									<Td>Actions</Td>
								</Tr>
							</Thead>
						</Show>
						<Tbody>
							<For each={data()}>
								{(book) => (
									<Tr>
										<Td>
											<Text>{book.index}</Text>
										</Td>
										<Td>
											<Anchor
												d={"flex"}
												alignItems="center"
												href={book.url[0]}
												external
											>
												<Icon
													as={HiOutlineLink}
													mr="$2"
													verticalAlign="text-bottom"
												/>
												<Text flex={"auto"}>{book.title}</Text>
											</Anchor>
										</Td>
										<Td>
											<Text>{book.author}</Text>
										</Td>
										<Td>
											<Button
												ml="$2"
												size="xs"
												aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
												onClick={(e) => {
													e.preventDefault();
													props.setBooks((books) => [...books, book]);
												}}
											>
												Add
											</Button>
										</Td>
									</Tr>
								)}
							</For>
						</Tbody>
					</Table>
				</Show>
			</Box>
		</>
	);
}
