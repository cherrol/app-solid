import { BookList } from "@components/Book/BookList";
import { AddBook } from "@components/Book/AddBook";
import { Divider, Anchor, Box } from "@hope-ui/solid";
import { createSignal } from "solid-js";
import { Link } from "solid-app-router";

const initialBooks = [
	{ title: "Code Complete", author: "Steve McConnell" },
	{ title: "The Hobbit", author: "J.R.R. Tolkien" },
	{ title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Book() {
	const [books, setBooks] = createSignal(initialBooks);

	return (
		<>
      <Box>
        <Anchor as={Link} href="/">
          跳转 Index
        </Anchor>
      </Box>
			<BookList books={books()} />
			<Divider my="$4" />
			<AddBook setBooks={setBooks} />
		</>
	);
}

export default Book;
