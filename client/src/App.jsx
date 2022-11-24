import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
