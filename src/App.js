
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/forgotPage';
import InputProduct from './pages/InputProduct';
import InputPromo from './pages/InputPromo';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/forgot' element ={<ForgotPage/>}/>
        <Route path='/inputProduct' element ={<InputProduct />}/>
        <Route path='/inputPromo' element ={<InputPromo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
