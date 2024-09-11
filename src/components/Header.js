// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import StatisticsIcon from './StatisticsIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Rent-Anywhere</h1>
        <nav className="header-nav">
              <NavLink to="/profile" className="header-profile">
              <FontAwesomeIcon icon={faUser} />
               <span style={{ paddingRight: '15px' }}></span>
              </NavLink>
              <NavLink to="/Analytics">
              <StatisticsIcon />
              </NavLink>
              
        </nav>
      </div>
    </header>
  );
};

export default Header;
