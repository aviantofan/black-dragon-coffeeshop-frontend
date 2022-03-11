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

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<HomeAdmin/>}/>

        <Route path='/login' element ={<Login />}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/forgot' element ={<ForgotPage/>}/>

        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products/:id' element ={<ProductDetails />}/>
        <Route path='/products' element ={<ProductList />}/>

        <Route path='/profile' element={<ProfilePage/>}/>

        <Route path='/promo/add' element ={<InputPromo />}/>
        <Route path='/promo/edit' element={<EditPromoAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
