import React, { useEffect, useState } from "react";

//Packages import
import axios from "axios";

//Components imports
import Card from "./Card";

const Countries = () =>{

    const [data,setData] = useState([]);
    const [sorted,setSorted] = useState([]);
    const [playOnce,setPlayOnce] = useState(true);
    const [rangeVal, setRangeVal] = useState(10);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Europe","Africa","Asia","America","Oceania"];
    const [colour,setColour] = useState("");

    useEffect(() =>{

     if(playOnce)
     {
        const country_api = {url: "https://restcountries.com/v2/all?fields=population;fields=name;fields=region;fields=capital;fields=flags;"};

        axios.get(country_api.url)
        .then((res) => 
        setData(res.data),
        setPlayOnce(false));
     }   
     
     const sortedCountry = () =>{
        const countryObj = Object.keys(data).map((i) => data[i]);
        const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population;
        });
       sortedArray.length = rangeVal;

        return sortedArray;
     };

     const ChangeColor = () =>{
        return sortedCountry().length === 250 ? "red" : "";
     };

     setColour(ChangeColor());
     setSorted(sortedCountry());

    }, [data, rangeVal,playOnce]); 


    return(
        <div className="countries">

          <p className="counter" style={{color: colour}} >{rangeVal}</p>
          <div className="sort-container">

            <input type="range" 
            min="1" max="250" 
            value={rangeVal} 
            onChange={(e) => setRangeVal(e.target.value)}
            />

            <ul>
                {radios.map((radio) =>{
                    return(
                        <li key={radio}>
                            <input type="radio" value={radio} id={radio} checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    );
                })}
            </ul>
          </div>

          <div className="cancel">
              {selectedRadio ? <h5 onClick={() => setSelectedRadio("")}>Reset</h5> : ""}
          </div>

            <ul className="countries-list">
            {sorted
            .filter((country) => country.region.includes(selectedRadio))
            .map((country) =>(
               <li key={country.name}><Card country={country}/></li> 
            ))}
            </ul>
        </div>
    );
};

export default Countries;