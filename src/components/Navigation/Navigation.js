import React, { Component } from 'react';
import './Navigation.css';

// Modules
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className='Navigation'>
        <div className='logo'>LOGO</div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/popular'>Popular</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
