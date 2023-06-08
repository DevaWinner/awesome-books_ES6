/* ================== Book Management ============= */
import displayBooks from './modules/BookManager.js';
import addBook from './modules/AddBook.js';
import removeBook from './modules/RemoveBook.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

displayBooks();

document.getElementById('addButton').addEventListener('click', addBook);

document.getElementById('bookList').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const { index } = event.target.parentElement.parentElement.dataset;
    removeBook(index);
  }
});

/* ============== Import Date and time from Luxon =========== */
const dt = DateTime.now();
const date = document.getElementById('today');

date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

/* ============== Navigation ================= */

// Control which section to show
const list = document.getElementById('navList');
const navAdd = document.getElementById('navAddNew');
const navContact = document.getElementById('navContact');

// Three main sections
const mainSection = document.getElementById('allBooks');
const addBookSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact');

list.addEventListener('click', () => {
  mainSection.classList.remove('hidden');
  addBookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

navAdd.addEventListener('click', () => {
  mainSection.classList.add('hidden');
  addBookSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

navContact.addEventListener('click', () => {
  mainSection.classList.add('hidden');
  addBookSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});
