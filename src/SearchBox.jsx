import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './SearchBox.css'
export default function SearchBox({updateInfo}) {

    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "5f7506f8121ee71de1745a17340f2031";

   let getWeatherInfo = async() => {

    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    

    let result = {
        city: city,
        temp :jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_Like,
        weather: jsonResponse.weather[0].description,


    }
    return result;

   };

    let handelChange = (eve) => {

        setCity(eve.target.value);
        
    };


    let handelSubmit = async (eve) => {
        eve.preventDefault();
         setCity("");
         let info = await getWeatherInfo();
         
         updateInfo(info);
        

    };
   
  return (
        <div class="searchBox">
             <h2>WEATHER APP </h2>

           <form onSubmit={handelSubmit} >
            <TextField id="outlined-basic" label="City Name" variant="outlined" 
            value={city} onChange={handelChange} required/>
            <br /> <br />
            <Button variant="contained" type="submit">Search</Button>
            </form>
          
        </div>
    );
}