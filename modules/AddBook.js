import bookCollection from './BookCollection.js';
import displayBooks from './BookManager.js';

const addBook = () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    bookCollection.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
    displayBooks();
  }
};

export default addBook;
