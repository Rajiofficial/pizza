import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
          <div className="pizza3"  >
              <img className="pizzas" src="/img/pizza3.png" alt="Pizza" />
              {/* <h1> Free Delivery With PIZZA OF THE DAY Only 8.99 USD </h1> */}
      
              <button type="button" class="btn btn-primary"><Link to="/menu">
                SHOP NOW
             </Link></button>
              
  
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
