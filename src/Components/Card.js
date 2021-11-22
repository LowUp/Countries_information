import React from "react";

const Card = (props) =>{

    const {country} = props;

    return(
        <React.Fragment>
        <div className="card">
        <img src={country.flag} alt="flag" />
            <ul>
             <li>Country: {country.name} </li>
             <li>Capital: {country.capital} </li>
             <li>Population: {country.population} </li>
            </ul>
        </div>
        </React.Fragment>
    );
}

export default Card;