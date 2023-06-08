import bookCollection from './BookCollection.js';
import displayBooks from './BookManager.js';

const removeBook = (index) => {
  bookCollection.removeBook(index);
  displayBooks();
};

export default removeBook;
