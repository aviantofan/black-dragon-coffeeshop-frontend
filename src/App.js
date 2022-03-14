import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products/:id' element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
