export function selectBook(book) {
	// console.log('A book has been selected: ', book.title);
	// selectBook is an action creator and it needs to return an
	// action - and object with a type property.
	// Type: Payload (uppercase)
	return {
      type: 'BOOK_SELECTED',
      payload: book
  }
}