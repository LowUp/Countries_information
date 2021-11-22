import React, { useEffect, useState } from "react";

//Packages import
import axios from "axios";
import Card from "./Card";

const Countries = () =>{

    const [data,setData] = useState([]);


    useEffect(() =>{

     axios.get('http://api.countrylayer.com/v2/all?access_key=e38607960f6594a8997763b36ebb376a')
     .then((res) => setData(res.data));

     console.log(data);

    }, []);

    return(
        <div className="countries">
            <ul className="countries-list">
            {data.map((country) =>(
               <li><Card country={country} Key={country.name} /></li> 
            ))}
            </ul>
        </div>
    );
};

export default Countries;