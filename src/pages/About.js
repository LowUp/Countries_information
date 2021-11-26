import React from "react";
import Logo from "../Components/logo";

const About = () => {

    return(
        <React.Fragment>

        <h1>About</h1>
        
        <p>Small ReactJS app that displays general information about certain such as the country name, 
        the capital and the population. This app also allows the user the filter countries by continent, 
        and to decide the number of countries displayed on the screen.
        </p>

        <Logo/>

        </React.Fragment>
    );
};

export default About;