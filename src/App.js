


import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={< Home/>}/>
    <Route path='header' element={<Header />}/>
    <Route path='about' element={<About />}/>
    <Route path='shop' element={  <Shop />}/>
    <Route path='menu' element={<Menu />}/>
    <Route path='clients' element={ <Clients />}/>
    <Route path='Prices' element={<Prices />}/>
    


    </Routes>
    
    
    
    
    </BrowserRouter>
      
      
    
      
     
      
    </div>
  );
}

export default App;
