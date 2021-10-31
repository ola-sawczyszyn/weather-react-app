import React from "react";

function fixNumberLowerThanTen(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function getWeekDay(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDays[date.getDay()];
}

function formatLastUpdated(lastUpdated) {
  let currentWeekDay = getWeekDay(lastUpdated);
  let currentHour = fixNumberLowerThanTen(lastUpdated.getHours());
  let currentMinutes = fixNumberLowerThanTen(lastUpdated.getMinutes());
  return `${currentWeekDay} ${currentHour}:${currentMinutes}`;
}

export default function LastUpdated(props) {
  let { lastUpdated } = props;
  return <div>Last updated: {formatLastUpdated(lastUpdated)}</div>;
}
