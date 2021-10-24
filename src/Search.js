import React from "react";

export default function Search() {
  return (
    <form id="searchCityForm">
      <div class="row">
        <div class="col">
          <input
            id="searchCityInput"
            type="text"
            class="form-control"
            placeholder="Enter name of a city"
          />
        </div>
        <div class="col">
          <input type="submit" class="btn btn-primary" value="Search" />
          <button class="btn btn-success" id="currentLocation">
            Current location
          </button>
        </div>
      </div>
    </form>
  );
}
