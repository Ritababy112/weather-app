import { useState } from "react";
import Search from "./component/search/Search";
import CurrentWeather from "./component/current-weather/current-weather";
import Forecast from "./component/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY,FORCAST_API_URL } from "./Api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [weatherResponse, setWeatherResponse] = useState(null); // Define weatherResponse state


  const handleOnSearchChange = (searchData) => {
    const city = searchData;
    console.log(city,'city')
    if(city.length > 0){
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}?city=${city}&country=ng&key=${WEATHER_API_KEY}`
      );
      const forcastWeatherFetch = fetch(
        `${FORCAST_API_URL}?city=${city}&country=ng&key=${WEATHER_API_KEY}`
      );
      Promise.all([currentWeatherFetch,forcastWeatherFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();
          let cw_data = weatherResponse.data[0];
          let fw_data = forcastResponse.data;
          console.log(fw_data,'data')
  
          setCurrentWeather(cw_data);
          setForecast(fw_data);
          //setWeatherResponse(weatherResponse); 
        })
        .catch(err => console.log(err,'error'));
    }
    
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
