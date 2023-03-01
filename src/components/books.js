import React from 'react';
import Book from './Book';
import Form from './Form';

const data = [
  {
    id: 1,
    title: 'The way of life',
    author: 'Hithel Jeris',
  },
  {
    id: 2,
    title: 'Curel of Jesuits',
    author: 'Habitamu Asimare',
  },
];

const Books = () => (
  <>
    <ul className="allBooks">
      {
          data.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} />
            </li>
          ))
        }
    </ul>
    <Form />
  </>
);

export default Books;
