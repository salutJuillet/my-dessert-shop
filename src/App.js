import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Category from './pages/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
