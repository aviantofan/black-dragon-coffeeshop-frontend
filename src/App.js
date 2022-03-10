import ForgotPage from './pages/forgotPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<ForgotPage/>}/>
      </Routes>
  </BrowserRouter>
  );
};

export default App;
