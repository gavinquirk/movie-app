import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import './Navigation.css';

const Navigation = (props) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className='Navigation'>
      <div className='logo'>LOGO</div>
      <ul className='nav-items'>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/movies'>Movies</Link>
        </li>
        <li className='nav-item'>
          <Link to='/shows'>Shows</Link>
        </li>
        {/* If userInfo exists, show logged in tools. Else, show logged out tools */}
        {userInfo ? (
          <>
            <li className='nav-item'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li className='nav-item'>
              <button className='logout-button' onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button className='login-button'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
