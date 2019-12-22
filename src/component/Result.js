import React from "react";

export default ({ weatherData, error }) => {
  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Raleway",
          padding: 20,
          color: "gray"
        }}
      >
        {error}
      </div>
    );
  }

  if (Object.keys(weatherData).length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Raleway",
          padding: 20,
          color: "gray"
        }}
      >
        You haven't selected a place, please select one
      </div>
    );
  }

  const weather = weatherData.weather[0];
  const { main, wind } = weatherData;

  //Function to change from K to ºC
  const KtoC = number => {
    if ((number - 273.15) % 1 === 0) {
      return number - 273.15;
    }
    return Number(number - 273.15).toFixed(2);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginRight: 10,
              borderRadius: 10,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              height: 100,
              background: "gray"
            }}
          >
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt=""
              style={{
                background: "lightgray"
              }}
            />
          </div>

          <h1 className="currentWeather">{weather.main}</h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="mainTemp">{KtoC(main.temp)} ºC</div>
          <div className="feelsLike">
            Feels Like:{" "}
            <span style={{ fontSize: 15 }}>{KtoC(main.feels_like)} ºC</span>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: 18,
            fontFamily: "Roboto",
            color: "#525252",
            marginTop: 20
          }}
        >
          Wind Speed:
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "Roboto",
            color: "#2f99c3"
          }}
        >
          {wind.speed} meter/second
        </div>
      </div>
    </div>
  );
};
