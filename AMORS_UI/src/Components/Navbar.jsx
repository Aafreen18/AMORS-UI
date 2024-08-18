import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='container-fluid navbar-transparent'style={{backgroundColor:"transparent !important"}}>
        <div className='row' >
          <div className='col-lg-10 mx-auto col-md-9 col-sm-9' >
            <nav className="navbar navbar-expand-lg navbar-transparent" >
              <div className="container-fluid">
                <div className='pt-4 fs-6'>
                  <NavLink className="navbar-brand text-white" to="#">AMORS</NavLink>
                  <p className="text-white">A Product By Futuristc Coders</p>
                </div>
                <button className="navbar-toggler" style={{backgroundColor:'#050A30'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" style={{backgroundColor:'darkblue'}}></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"} aria-current="page" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/about">ABOUT</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/contact">CONTACT</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/register">SIGN_IN</NavLink>
                    </li> 
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;