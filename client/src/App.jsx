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
import CheckoutSuccess from './components/CheckoutSuccess';
import Dashboard from './components/Admin/Dashboard';
import Summary from './components/Admin/Summary';
import Products from './components/Admin/Products';
import CreateProduct from './components/Admin/CreateProduct';
import Users from './components/Admin/Users';
import Orders from './components/Admin/Orders';

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
          <Route
            path='/checkout-success'
            element={
              <ProtectedRoute>
                <CheckoutSuccess />
              </ProtectedRoute>
            }
          />
          <Route path='/admin' element={<Dashboard />}>
            <Route path='summary' element={<Summary />} />
            <Route path='products' element={<Products />}>
              <Route path='create-products' element={<CreateProduct />} />
            </Route>
            <Route path='users' element={<Users />} />
            <Route path='orders' element={<Orders />} />

          </Route>
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
