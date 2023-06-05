import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Category from './pages/Category';
import LogIn from './pages/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category' element={<Category />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
