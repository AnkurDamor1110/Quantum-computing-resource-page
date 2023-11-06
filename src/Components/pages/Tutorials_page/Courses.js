import React from 'react';
import bookData from '../../../Data/Tutorial/Courses_data'; // Import your book data
import './bookspage.css'; // Import your CSS file

const Bookspage = () => {
  return (
    <div className="company">
    <div className="books-container">
      {bookData.map((book, index) => (
        <div key={index} className="book-card">
          <h2 className="book-title">{book.Title }</h2>
          <p className="book-author">Author: {book.AuthorName}</p>
          <a className="book-link" href={book.URL} target="_blank" rel="noopener noreferrer">
            Visit Course
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Bookspage;
