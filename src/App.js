import React, { useState } from "react";
import Search from "./Search";
import "./App.css";
import Weather from "./Weather";
import Pokemon from "./Pokemon";

export default function App() {
  let [weather, setWeather] = useState();
  let [lastUpdated, setLastUpdated] = useState(new Date());

  function handleWeather(weather) {
    setWeather(weather);
    setLastUpdated(new Date());
  }

  let cityName = weather?.name;

  return (
    <div className="container pt-4">
      <div className="card p-4 center weather-card">
        <div className="row mb-4">
          <Search onWeather={handleWeather} />
        </div>
        {weather && <Weather weather={weather} lastUpdated={lastUpdated} />}

        {cityName && (
          <div className="card pokemon-card">
            <Pokemon seed={cityName} />
          </div>
        )}
      </div>
      <div className="center">
        <a
          className="github-link"
          href="https://github.com/ola-sawczyszyn/weather-react-app"
        >
          Open-source code
        </a>
        <span className="mx-1">by Aleksandra Sawczyszyn</span>
      </div>
    </div>
  );
}
