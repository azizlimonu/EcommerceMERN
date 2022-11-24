import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/checkout-success' element={<CheckoutSuccess />} /> */}
          {/* <Route path="/admin" element={<Dashboard />}> */}
          {/* <Route path="summary" element={<Summary />} /> */}
          {/* <Route path="products" element={<Products />}> */}
          {/* <Route path="create-product" element={<CreateProduct />} /> */}
          {/* </Route> */}
          {/* <Route path="users" element={<Users />} /> */}
          {/* <Route path="orders" element={<Orders />} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
