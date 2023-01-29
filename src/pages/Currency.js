import { useState, useEffect } from "react";
import classes from "./Currency.module.css"


function Currency(){

    const [isLoading, setIsLoading] =useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.coinbase.com/v2/currencies'
        ).then((response) =>{
            return response.json();
        }).then((data) => setData(data))

    }, []);



    return (
        <div className={classes.box2}>
        <h2>Currency Page</h2>
        {isLoading && <div>Loading...</div>}
        <ul>
            {data.data && data.data.map((obj, index) => (
                <li key={index}>
                    {obj.id} 
                <ul>
                    <li>{obj.name}</li>
                <ul>
                    <li>{obj.min_size}</li>
                </ul>
                </ul>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Currency;