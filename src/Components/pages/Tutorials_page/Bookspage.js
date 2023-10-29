import React from 'react';
import bookData from '../../../Data/Tutorial/Books_data'; // Import your book data
import './bookspage.css'; // Import your CSS file

const Bookspage = () => {
  return (
    <div className="company">
    <div className="books-container">
      {bookData.map((book, index) => (
        <div key={index} className="book-card">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">Author: {book.author}</p>
          <a className="book-link" href={book.link} target="_blank" rel="noopener noreferrer">
            Visit Book
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Bookspage;
