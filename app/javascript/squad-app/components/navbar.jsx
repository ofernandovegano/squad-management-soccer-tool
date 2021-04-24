import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/venturus-logo.png'
import avatar from '../../../assets/images/avatar.png'


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className='navbar-venturus'>
        <Link to='/' className='logo-link'>
        <div className="logo">
            <img src={ logo } alt="Venturus-logo" />
          <p>Squad Managment Tool</p>
        </div>
        </Link>
          <div className="logged-in">
            <p className='navbar-name'>
              Fernando Gomes
            </p>
            <div className="avatar border">
              <img src={ avatar } alt="avatar"/>
            </div>
          </div>
      </div>
    </div>
  );
};


export default Navbar;
