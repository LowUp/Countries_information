import React from "react";

// import pages
import Home from '../pages/Home';
import About from '../pages/About';

// Navigation package
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from '../pages/404';
import Navigation from '../Components/Navigation';

const Header = () =>{

    return (
        <BrowserRouter>
        <Navigation/>
        <Routes>
      
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
      
      
        </Routes>
        </BrowserRouter>
    );
};

export default Header;