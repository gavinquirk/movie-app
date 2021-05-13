import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
import Loader from '../../components/Loader/Loader';
import { register } from '../../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className='Login'>
      <div className='form-container'>
        {loading && <Loader />}
        <h1>Register</h1>
        {/* {error && <Message variant='danger'>{error}</Message>} */}
        <form onSubmit={submitHandler}>
          {/* Name */}
          <label>Name</label>
          <input
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          {/* Confirm Password */}
          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit'>Register</button>
        </form>
      </div>
      <div>
        Have an account? <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
