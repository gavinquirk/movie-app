import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
import Loader from '../../components/Loader/Loader';
import { login } from '../../actions/userActions';
import './Login.css';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    // If logged in...
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='Login'>
      <div className='form-container'>
        {loading && <Loader />}
        <h1>Sign In</h1>
        {/* {error && <Message variant='danger'>{error}</Message>} */}
        <form onSubmit={submitHandler}>
          {/* Email */}
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password */}
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        New Customer? <Link to={'/register'}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
