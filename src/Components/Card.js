import React from "react";

const Card = (props) =>{

    const {country} = props;

    const numberFormat = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="card">
        <img src={country.flags.png} alt="flag" />
        <div className="data-container">
            <ul>
             <li>{country.name} </li>
             <li>Capital: {country.capital} </li>
             <li>Population: {numberFormat(country.population)}</li>
            </ul>
        </div>
        </div>
    );
}

export default Card;