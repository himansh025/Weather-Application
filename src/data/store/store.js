import { configureStore } from "@reduxjs/toolkit";
import weatherreducer from "../slicer/weatherslicer";

const store = configureStore({
  reducer: {
    weather: weatherreducer,
  },
});
export default store;
