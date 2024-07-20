import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherdetails = createAsyncThunk(
  "weather/fetchweather",
  async (city) => {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=b5241457036d4b3ed7062a07616fc0b0`


      
    );
    console.log(response.data);
    return response.data; // Return the full data, not just response.data.weather
  }
);

const weatherslicer = createSlice({
  name: "weather",
  initialState: {
    weatherdetail: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(weatherdetails.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(weatherdetails.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherdetail = action.payload; // Assign the full data to weatherdetail
      })
      .addCase(weatherdetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message
      });
  },
});

export default weatherslicer.reducer;
