import React, { useCallback } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { weatherdetails } from '../data/slicer/weatherslicer';

const Box = () => {
  const dispatch = useDispatch();

  const getWeatherIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const details = useSelector((state) => state.weather.weatherdetail);

  // Function to handle refreshing weather data
  const handleRefresh = useCallback(() => {
    dispatch(weatherdetails(""));
    // dispatch()
  }, [dispatch]);

  return (
    <div className="box">
      <div className="weather-info">
        {details && details.weather && (
          <>
            <img 
              src={getWeatherIconUrl(details.weather[0].icon)}
              alt="Weather icon"
              className="weather-icon"
            />
            <div className="weather-details">
              <h2 className="temperature">{`${details.main.temp} °C`}</h2>
              <div className="more-details">
                {/* <p>Feels like: {`${details.main.feels_like} °C`}</p>
                <p>Humidity: {details.main.humidity}%</p> */}
                <p>Wind Speed: {details.wind.speed} m/s</p>
                {/* <p>Sunrise: {new Date(details.sys.sunrise * 1000).toLocaleTimeString()}</p> */}
                {/* <p>Sunset: {new Date(details.sys.sunset * 1000).toLocaleTimeString()}</p> */}
                {/* Add more details as needed */}
              </div>
              <h5 className="location">{details.name}</h5>
            </div>
          </>
        )}
      </div>

      {/* Button to refresh weather data */}
      <button className="refresh-btn" onClick={handleRefresh}>
        Refresh
      </button>

      {/* Loading message or fallback */}
      {!details && <p className="loading">Loading...</p>}
    </div>
  );
};

export default Box;
