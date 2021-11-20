import axios from "axios";
import React, { useEffect, useState } from "react";
import getWeekDay from "./getWeekDay";
let apiKey = "adde97fc3eb60495333cc33248427fb1";
let exclude = "current,minutely,hourly,alerts";
export default function Forecast(props) {
  let { coords } = props;
  let [forecastDays, setForecastDays] = useState([]);

  useEffect(() => {
    if (!coords) {
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${exclude}&appid=${apiKey}&units=metric`
      )
      .then((response) => response.data.daily.slice(1, 7))
      .then((forecast) => setForecastDays(forecast))
      .catch((error) => console.error(error));
  }, [coords]);

  if (forecastDays.length === 0) {
    return <> </>;
  }

  return (
    <div className="row">
      {forecastDays.map((day, index) => (
        <div className="col-2" key={index}>
          <DailyForecast day={day} />
        </div>
      ))}
    </div>
  );
}

function DailyForecast(props) {
  let { day } = props;
  let date = new Date(day.dt * 1000);
  let weekDay = getWeekDay(date).substring(0, 3);
  let temperature = day.temp;
  let icon = day.weather[0].icon;
  let min = Math.floor(temperature.min);
  let max = Math.floor(temperature.max);
  return (
    <>
      <div class="weather-forecast-date">{weekDay}</div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
        width="42"
      />
      <div class="weather-forecast-temperature">
        <span class="weather-forecast-temperature-max"> {max}°C </span>
        <span class="weather-forecast-temperature-min"> {min}°C </span>
      </div>
    </>
  );
}
