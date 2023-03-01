import React from 'react';
import { useSelector } from 'react-redux';
import book from './book';
import form from './form';

function Books() {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="container">
      {books.map((book) => (
        <book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <form />
    </div>
  );
}

export default Books;
