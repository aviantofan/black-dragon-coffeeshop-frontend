import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/forgotPage';
import ProfilePage from './pages/profilePage';
import InputProduct from './pages/InputProduct';
import InputPromo from './pages/InputPromo';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import EditPromoAdmin from './pages/EditPromoAdmin';
import ChatUser from './pages/ChatUser';
import PaymentDetails from './pages/PaymentDetails';
import EditSaveProduct from './pages/EditSaveProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getUser } from './redux/actions/auth';

import { PublicRoute, PrivateRoute } from './components/CustomRoute';

function App () {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user) {
      console.log('token', user);
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            result: { ...user }
          }
        }
      });
      // dispatch(getUser(user.token, auth.results.id));
    }
  }, [dispatch, auth.results.id]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PublicRoute page={<Home />} /> }/>
        <Route path='/admin' element={<HomeAdmin/>}/>

        <Route path='/login' element={ <PublicRoute restricted={true} page={<Login />} /> }/>
        <Route path='/signup' element={ <PublicRoute restricted={true} page={<Signup />} /> }/>
        <Route path='/forgot' element={ <PublicRoute restricted={true} page={<ForgotPage />} /> }/>

        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products/:id' element ={<ProductDetails />}/>
        <Route path='/products' element ={<ProductList />}/>
        <Route path='/products/edit' element ={<EditSaveProduct />} />

        <Route path='/profile' element={ <PrivateRoute restricted={true} page={<ProfilePage />} /> }/>

        <Route path='/promo/add' element ={<InputPromo />}/>
        <Route path='/promo/edit' element={<EditPromoAdmin/>}/>
        <Route path='/chat' element={<ChatUser/>}/>
        <Route path='/payment/:id' element={<PaymentDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
