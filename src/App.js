import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import List from './components/List';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Qna from './pages/Qna';
import Error404 from './pages/Error404';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path='/' element={<Main />} />
          {/* <Route path='/list' element={<List />} /> */}
          {/* List에 data를 보내야 함 */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/qna' element={<Qna />} />
          <Route component={Error404} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;