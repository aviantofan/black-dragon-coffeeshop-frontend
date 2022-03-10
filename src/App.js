// import React from 'react';
// import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<HomeAdmin/>}/>
    </Routes>
    </BrowserRouter>
  );
};
