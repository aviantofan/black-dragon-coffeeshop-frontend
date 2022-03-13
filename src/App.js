// import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { getUser } from './redux/actions/auth';

function App () {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: { token }
          }
        }
      });
      dispatch(getUser(token));
    }
  }, [dispatch, auth.token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
