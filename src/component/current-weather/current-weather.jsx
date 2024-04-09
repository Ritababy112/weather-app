import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city_name}</p>
          {data && Object.keys(data).length > 0 && 
           (
  <p className="weather-description">{data.weather.description}</p>
)}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`/icons/${data.weather.icon.slice(1)}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.temp}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {(data.app_temp).toFixed(0)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind_spd} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.rh}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.pres} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
