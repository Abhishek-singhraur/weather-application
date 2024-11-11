import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import { Info } from '@mui/icons-material';

export default function WeatherApp() {

    let [weatherInfo , setWeatherInfo] = useState({
        city:"wonderland",
        feelslike: 24.04,
        temp: 25.05,
        tempMin: 25.05,
        tempMax:25.05,
        humidity:47,
        weather:"Haze",
    },[]);

    let updateInfo = (result) => {
        console.log("result is ",result);
       setWeatherInfo(result);
    }

    return (
        <div>
           
            <SearchBox  updateInfo= {updateInfo}/>
            <br /> <br />
            <InfoBox info = {weatherInfo} />
        </div>
    );
}