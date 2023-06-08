/* ================== Book Management =============*/

import { displayBooks } from './modules/BookManager.js';
import addBook from './modules/AddBook.js';
import removeBook from './modules/RemoveBook.js';

displayBooks();

document.getElementById('addButton').addEventListener('click', addBook);

document.getElementById('bookList').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const index = event.target.parentElement.parentElement.dataset.index;
    removeBook(index);
  }
});
