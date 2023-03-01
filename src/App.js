import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import Categories from './components/categories';
import navbar from './components/navbar';

function App() {
  return (
    <>
      <navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
