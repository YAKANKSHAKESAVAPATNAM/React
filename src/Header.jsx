import React,{useState} from 'react';
import './Header.css';
import Form1 from './Form1';
import { Link } from 'react-router-dom';
function Header() {

  return (
    <header className='header'>
      <div className='header-item' ><Link to="/Form1">ADD DATA</Link></div>
        <div className='header-item2'><Link to="/View">VIEW DATA</Link></div>
    </header>
  );
}


export default Header;