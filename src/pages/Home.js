import React from "react";
import Body from "../Components/body";
import Logo from "../Components/logo";

const Home = () => {

    return(
        <React.Fragment>

        <h2 style={{textAlign: "center"}} >Most populated countries</h2>
        <Logo/>
        <Body/>

        </React.Fragment>
    );
};

export default Home;