import React from "react";
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="navbar__ul">
          <div className="navbtn">
          <NavLink to="/">home</NavLink>
          </div>
       
          
          <div  className="navbtn">
          <NavLink to="/">menu</NavLink>
          </div>

         
        
          <div  className="navbtn">
          <NavLink to="/">shop</NavLink>
            </div>
          
        
          <div  className="navbtn">
          <NavLink to="/">news</NavLink>
            </div>
       
          <div  className="navbtn">
          <NavLink to="/">contact</NavLink>
            </div>

       
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
