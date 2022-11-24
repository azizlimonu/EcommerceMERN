import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/reducer/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (auth._id) {
      navigate('/cart');
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("login user",user);
    dispatch(loginUser(user));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='formcontainer'>
        <h2>Login</h2>
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type='password'
          placeholder='password'
          autoComplete='on'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button>
          {auth.loginStatus === 'pending' ? "submitting..." : "Login"}
        </button>
      </form>
    </>
  )
}

export default Login