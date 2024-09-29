import React, { useCallback } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { weatherdetails } from '../data/slicer/weatherslicer';
import { FaTemperatureHigh, FaWind, FaTint, FaSun, FaCloudSun } from "react-icons/fa"; // Importing FontAwesome icons

const Box = () => {
  const dispatch = useDispatch();

  const getWeatherIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const details = useSelector((state) => state.weather.weatherdetail);

  // Function to handle refreshing weather data
  const handleRefresh = useCallback(() => {
    dispatch(weatherdetails(""));
  }, [dispatch, details]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto mt-10">
      <div className="weather-info flex flex-col items-center space-y-4">
        {details && details.weather && (
          <>
            <img
              src={getWeatherIconUrl(details.weather[0].icon)}
              alt="Weather icon"
              className="w-20 h-20"
            />
            <div className="weather-details text-center">
              <h2 className="temperature text-5xl font-bold text-gray-800">{`${details.main.temp} °C`}</h2>
              <div className="more-details text-sm text-gray-600 mt-4 space-y-3">
                <p className="flex items-center justify-start">
                  <FaTemperatureHigh className="text-red-500 mr-2" />
                  <span className="font-semibold">Feels like:</span> {`${details.main.feels_like} °C`}
                </p>
                <p className="flex items-center justify-start">
                  <FaTint className="text-blue-500 mr-2" />
                  <span className="font-semibold">Humidity:</span> {details.main.humidity}%
                </p>
                <p className="flex items-center justify-start">
                  <FaWind className="text-gray-600 mr-2" />
                  <span className="font-semibold">Wind Speed:</span> {details.wind.speed} m/s
                </p>
                <p className="flex items-center justify-start">
                  <FaSun className="text-yellow-500 mr-2" />
                  <span className="font-semibold">Sunrise:</span> {new Date(details.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
                <p className="flex items-center justify-start">
                  <FaCloudSun className="text-orange-400 mr-2" />
                  <span className="font-semibold">Sunset:</span> {new Date(details.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
              <h5 className="location text-lg font-semibold mt-4 text-gray-700">{details.name}</h5>
            </div>
          </>
        )}
      </div>

      {/* Button to refresh weather data */}
      <button
        className="refresh-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-6 rounded-lg w-full"
        onClick={handleRefresh}
      >
        Refresh
      </button>

      {/* Loading message or fallback */}
      {!details && <p className="loading text-gray-600 text-center mt-6">Loading...</p>}
    </div>
  );
};

export default Box;
