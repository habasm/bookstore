import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  checkStatus: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      const updatedCategories = {
        ...state,
        checkStatus: 'Under Construction',
      };
      return updatedCategories;
    },
    add: () => {

    },
  },
});

// Action creators are generated for each case reducer function
export const { status, add } = categoriesSlice.actions;

export default categoriesSlice.reducer;
