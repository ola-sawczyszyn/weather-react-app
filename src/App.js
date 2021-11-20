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

  return (
    <div className="container pt-4">
      <div className="card p-4 center weather-card">
        <div className="row mb-4">
          <Search onWeather={handleWeather} />
        </div>
        {weather && <Weather weather={weather} lastUpdated={lastUpdated} />}
        <div className="card pokemon-card">
          <Pokemon seed={weather?.name} />
        </div>
      </div>
      <div className="center">
        <a href="https://github.com/ola-sawczyszyn/weather-react-app">
          Open-source code
        </a>
        by Aleksandra Sawczyszyn
      </div>
    </div>
  );
}
