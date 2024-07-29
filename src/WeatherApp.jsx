//to combine both file - searchbox and InfoBox.jsx
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import {useState} from "react";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05, // Add this line
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 47,
        weather: "haze"
    });
    

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App by Raj</h2>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}