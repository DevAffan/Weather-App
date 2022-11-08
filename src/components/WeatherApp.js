import React , {useState} from "react";
import "./css/style.css";

const WeatherApp = ()=>{
    const [city , setcity] = useState(null);
    const [search , setsearch] = useState(null);
    
    return(    
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                        type= "search"
                        placeholder= "Search City"
                        className="inputField"
                        onChange={()=>{

                        }}
                    />
                </div>
                <div className="info">
                    <h2 className="">
                    <i className="fas fa-street-view" />{city}
                    </h2>
                    <h1 className="temp">
                        5asd
                    </h1>
                    <h3 className="tempmin_max">
                        min: 123 max:12312
                    </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </>
    )
}

export default WeatherApp;