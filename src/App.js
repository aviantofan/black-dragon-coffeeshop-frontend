
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/forgotPage';
import InputProduct from './pages/InputProduct';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/forgot' element ={<ForgotPage/>}/>
        <Route path='/inputProduct' element ={<InputProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
