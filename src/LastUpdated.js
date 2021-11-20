import React from "react";
import getWeekDay from "./getWeekDay";
function fixNumberLowerThanTen(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
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
