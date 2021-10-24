import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div class="container pt-4">
      <div class="card p-4 center">
        <div class="row mb-4">
          <Search />
        </div>
        <div class="row">
          <h3 id="city">Oslo</h3>
          <div id="dateTime">Last updated: Thursday 23:00</div>
          <div id="weather">Clear</div>
        </div>
        <div class="row">
          <div class="col-8 temperature-wrapper">
            <img
              id="icon"
              alt="Weather icon"
              src="http://openweathermap.org/img/wn/01d@2x.png"
            />
            <div class="temperature-info">
              <span id="temperature">23</span>
              <span id="temperature-units">
                <a href="/">°C </a>|<a href="/">°F </a>
              </span>
            </div>
          </div>
          <div class="col">
            <div id="humidity">Humidity: 90%</div>
            <div id="wind">Wind: 90km/h</div>
          </div>
        </div>
        <div class="row">
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <div class="center">
        <a href="https://github.com/ola-sawczyszyn/weather-react-app">
          Open-source code
        </a>
        by Aleksandra Sawczyszyn
      </div>
    </div>
  );
}
