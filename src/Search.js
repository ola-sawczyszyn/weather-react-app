import React, { useState } from "react";
import axios from "axios";

let apiKey = "adde97fc3eb60495333cc33248427fb1";

export default function Search(props) {
  let { onWeather } = props;
  let [city, setCity] = useState("");

  function handleResponse(response) {
    onWeather(response.data);
    setCity("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!city) {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleCurrentLocation(event) {
    event.preventDefault();

    function handleCurrentPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleResponse);
    }

    navigator.geolocation.getCurrentPosition(handleCurrentPosition);
  }

  return (
    <form id="searchCityForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter name of a city"
          />
        </div>
        <div className="col">
          <input type="submit" className="btn btn-primary" value="Search" />
          <button
            className="btn btn-primary mx-1"
            onClick={handleCurrentLocation}
          >
            Current location
          </button>
        </div>
      </div>
    </form>
  );
}
