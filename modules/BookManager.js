import bookCollection from './BookCollection.js';

const displayBooks = () => {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  bookCollection.getBooks().forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <div class="book-info">
        <span>"${book.title}"</span>
        <span> by ${book.author}</span>
      </div>
      <div class="btn-container">
        <button class="remove-button">Remove</button>
      </div>
    `;
    bookList.appendChild(bookElement);
  });
};

export default displayBooks;
