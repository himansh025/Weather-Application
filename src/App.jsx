import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Box from "./components/Box";
import Input from "./components/Input";
import { useDispatch } from "react-redux";
import { weatherdetails } from "./data/slicer/weatherslicer";
import { useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const weatherapp = useSelector((state) => state.weather.weatherdetail);
  // console.log("weatherspp " , weatherapp);
  const [city, setcity] = useState("");
  const dispatch = useDispatch();
  const handlechange = () => {
    dispatch(weatherdetails(city));
  };

  return (
    <div>
      <h1> Weather Forecast</h1>
      <div className="flex items-center m-4">
        <Input
          value={city}
          placeholder="Enter City Name"
          onChange={(e) => setcity(e.target.value)}
        />
        <Button onClick={handlechange} value="Search" />
      </div>

      <Box value={weatherapp} />
      {/* <Button value="Refresh" onclick={reset} /> */}
    </div>
  );
}

export default App;
