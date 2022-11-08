import React , {useEffect, useState} from "react";
import "./css/style.css";

const WeatherApp = ()=>{
    const [city , setcity] = useState(null);
    const [search , setsearch] = useState('karachi');
    
    useEffect( () => {
        const fetchData = async () => {
            const url = `https://weatherdbi.herokuapp.com/data/weather/${search}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(city.some(cit => cit.status === "fail"));
            setcity(data);
        }
        fetchData();
    } , [search])
    return(    
        <>
            <div className="main">
                <h1 className="heading">Weather App</h1>
                <div className="inputData">
                    <input 
                        type= "search"
                        placeholder= "Search City"
                        className="inputField"
                        onChange={( event )=>{
                            setsearch(event.target.value)
                        }}
                    />
                </div>
                { (city == null || city.status == 'fail') ? (<p className='errorMsg'>No Data Found</p> ): 
                    (<div>
                    <div className="detail" >
                        <h1 className="temp">
                        {city.currentConditions.temp.c} °C
                        </h1>
                        <h3 className="data icon-comment">
                        <img src={city.currentConditions.iconURL} alt="Icon" /> {city.currentConditions.comment}
                        </h3>
                        <h2 className="location">
                        <i class="fa fa-map-marker" />{search}
                        </h2>
                        <h3 className="data">
                            {city.region} - ({city.currentConditions.dayhour})
                        </h3>
                        <h3 className="data">
                        Humidity: {city.currentConditions.humidity}
                        </h3>
                    </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                    </div>)
}
                <p className="creator">Created by : Affan Ali</p>
            </div>
        </>
    )
}

export default WeatherApp;