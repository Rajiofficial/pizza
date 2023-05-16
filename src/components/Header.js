import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner">
            <div className="pizza2">
            <p >Pizza Devlivery</p>
            <p>MAESTRO PIZINNI</p>
            </div>
            <div className="first-flex">
              <div className="img1">
              <img src="/img/pizza2.png" alt="Pizza" />
              </div>
              <div className="i-tag">
              <i > flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, </i>
              </div>
            </div>
             
            
        
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
