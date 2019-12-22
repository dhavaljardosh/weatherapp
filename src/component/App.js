import React, { useState, useEffect } from "react";
import LocationSearch from "./LocationSearch";
import Result from "./Result";

export default () => {
  const [latLng, setLatLng] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    //Fetch Weather data
    const getWeatherData = async () => {
      const key = "";
      const getData = await fetch(
        `http://api.openweathermap.org/data/2.5/find?lat=${latLng.lat}&lon=${latLng.lng}&cnt=1&appId=${key}`
      );
      const dataObj = await getData.json();
      console.log(dataObj);
      if (dataObj.cod === "200") {
        setWeatherData(dataObj.list[0]);
        setError("");
      } else {
        setError("Something is wrong, couldn't complete the request");
      }
    };
    if (latLng.lng) {
      getWeatherData();
    }
  }, [latLng, setLatLng]);

  //Fetch data from Child
  const getDataFromChild = result => {
    setLatLng(result);
  };

  return (
    <div>
      <div className="outerBox">
        <Result weatherData={weatherData} error={error} />
        <div>
          <LocationSearch updateParent={getDataFromChild} />
        </div>
      </div>
    </div>
  );
};
