import ForgotPage from './pages/forgotPage';
import ProfilePage from './pages/profilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path='forgotPage' element ={<ForgotPage/>}/>
      </Routes>
  </BrowserRouter>
  );
};

export default App;
