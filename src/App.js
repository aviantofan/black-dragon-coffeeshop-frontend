import ProductList from './pages/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
