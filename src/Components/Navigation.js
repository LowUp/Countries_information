import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () =>{

    return(
        <React.Fragment>
        <div className="navigation">

        <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>

        </div>
        </React.Fragment>
    );
};

export default Navigation;