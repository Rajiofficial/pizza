import React from "react";
import Header from "./Header";
import About from "./About";
import Shop from "./Shop";
import Menu from "./Menu";
import Clients from "./Clients";
import Prices from "./Prices";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default Home;