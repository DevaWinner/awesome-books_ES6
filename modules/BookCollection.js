/* eslint-disable class-methods-use-this */
import Book from './Book.js';

class BookCollection {
  constructor() {
    this.books = this.loadBooksFromLocalStorage();
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  getBooks() {
    return this.books;
  }
}

const bookCollection = new BookCollection();

export default bookCollection;
