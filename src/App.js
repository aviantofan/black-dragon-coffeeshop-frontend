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

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element ={<Login />}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/forgot' element ={<ForgotPage/>}/>
        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products/:id' element ={<ProductDetails />}/>
        <Route path='/products' element ={<ProductList />}/>
        <Route path='/promos/add' element ={<InputPromo />}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<HomeAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
