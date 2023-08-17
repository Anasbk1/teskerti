import React from 'react';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import '../src/NavBar.css'
function Navbar() {
  return (
    <div className='Nav'>
        <div className='Navlogo'>
     <Link to={'/'}> <img src={logo} className='Navlogo' alt='logo' /></Link>
      </div>
<div >

        <div className='navcat'>
         {/* <Search/> */}
          <h2>
            <Link to='/add'>Add a ticket</Link>
          </h2>
          <h2>
            <Link to='/login'>Connect</Link>
          </h2>
        </div>


      </div>
    </div>
  );
}

export default Navbar;