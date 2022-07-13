export async function searchBooks(query) {
	const requestUrl = `https://openlibrary.org`;

	if (query.trim() === '') return [];

	const response = await fetch(
		`${requestUrl}/search.json?q=${encodeURI(query)}`
	);

	const results = await response.json();

	return results.docs.map(
		({ title, seed = [''], author_name = [] }, index) => ({
			index,
			title,
			url: seed.map((item) => requestUrl + item),
			author: author_name.join(', '),
		})
	);
}
