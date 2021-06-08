import React from 'react';
import Logo from '../img/CLIMA.jpg'
import SearchBar from '../components/SearchBar';
import './Nav.css';


import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <div >
      <Link to='/ApiDelClima'>
        <div className="Container">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          <p>Weather App</p>
        </div>
      </Link>

      <SearchBar
        onSearch={onSearch}
      />

    </div>
  );
};