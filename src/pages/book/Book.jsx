import { BookList } from "@components/Book/BookList";
import { AddBook } from "@components/Book/AddBook";
import { Divider } from "@hope-ui/solid";
import { createSignal } from "solid-js";

const initialBooks = [
	{ title: "Code Complete", author: "Steve McConnell" },
	{ title: "The Hobbit", author: "J.R.R. Tolkien" },
	{ title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Book() {
	const [books, setBooks] = createSignal(initialBooks);

	return (
		<>
			<BookList books={books()} />
			<Divider my="$4" />
			<AddBook setBooks={setBooks} />
		</>
	);
}

export default Book;
