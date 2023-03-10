import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle',
  error: '',
};

// Async thunk to fetch books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books`);
  const data = await response.json();
  return data;
});

// Async thunk to add books
export const addBooks = createAsyncThunk('books/addBook', async (book, { dispatch }) => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const data = await response.json();
  dispatch(fetchBooks);
  return data;
});

// Async thunk to remove a book
export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books/${bookId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      const books = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const liveBooks = action.payload;
        const booksStore = [];
        Object.keys(liveBooks).map((id) => (
          booksStore.push(
            {
              item_id: id,
              title: liveBooks[id][0].title[0],
              author: liveBooks[id][0].author[0],
              category: liveBooks[id][0].category,
            },
          )
        ));
        return { ...state, books: booksStore, status: 'succeeded' };
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        const status = 'failed';
        const error = action.error.message;
        return { ...state, status, error };
      })
      .addCase(addBooks.fulfilled, async (state) => ({ ...state, status: 'succeeded' }))
      .addCase(addBooks.rejected, (state, action) => {
        const status = 'failed';
        const error = action.error.message;
        return { ...state, status, error };
      })
      .addCase(removeBook.fulfilled, (state) => ({ ...state, status: 'succeeded' }));
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
