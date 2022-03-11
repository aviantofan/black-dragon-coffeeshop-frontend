
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/forgotPage';
import InputProduct from './pages/InputProduct';
import InputPromo from './pages/InputPromo';
import ProductList from './pages/ProductList';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/forgot' element ={<ForgotPage/>}/>
        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products' element ={<ProductList />}/>
        <Route path='/promos/add' element ={<InputPromo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
