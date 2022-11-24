import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../features/reducer/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate('/cart');
    }
  }, [auth._id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit user", user);
    dispatch(registerUser(user));
  };

  return (
    <>
      <form className='formcontainer' onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
          {auth.registerStatus === 'pending' ? "Submitting" : "Register"}
        </button>
        {auth.loginStatus === "rejected"
          ? <p>{auth.registerError}</p>
          : null
        }
      </form>
    </>
  )
}

export default Register