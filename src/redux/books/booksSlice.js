/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The name of faith',
      author: 'Sooner',
    },
    {
      id: 2,
      title: 'Contradiction paths',
      author: 'HABASM',
    },
    {
      id: 3,
      title: 'Some of the path life',
      author: 'Durbete Gojam',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
