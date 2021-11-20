import React, { useState } from "react";
import LastUpdated from "./LastUpdated";

function convertTemperature(temperature, unit) {
  if (unit === "fahrenheit") {
    temperature = (temperature * 9) / 5 + 32;
  }
  return Math.round(temperature);
}

export default function Weather(props) {
  let { weather, lastUpdated } = props;
  let [units, setUnits] = useState("celcius");
  return (
    <>
      <div className="row">
        <h3>{weather.name}</h3>
        <LastUpdated lastUpdated={lastUpdated} />
        <div>{weather.weather[0].description}</div>
      </div>
      <div className="row">
        <div className="col-8 temperature-wrapper">
          <img
            className="weather-icon"
            alt="Weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div className="temperature-info">
            <span className="temperature-value">
              {convertTemperature(weather.main.temp, units)}
            </span>
            <span
              className={`unit-changer ${
                units === "celcius" ? "selected" : ""
              }`}
              onClick={() => setUnits("celcius")}
            >
              °C
            </span>
            |
            <span
              className={`unit-changer ${
                units === "fahrenheit" ? "selected" : ""
              }`}
              onClick={() => setUnits("fahrenheit")}
            >
              °F
            </span>
          </div>
        </div>
        <div className="col">
          <div>Humidity: {Math.round(weather.main.humidity)}%</div>
          <div>Wind: {Math.round(weather.wind.speed)}km/h</div>
        </div>
      </div>
      <div className="row">
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </>
  );
}
