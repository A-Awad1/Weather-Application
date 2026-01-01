import { createSlice } from "@reduxjs/toolkit";
import { getHourlyData } from "../thunkMethods";
import type { HourlyDataState, Error } from "~/types";

const initialState: HourlyDataState = {
  loading: false,
  error: {},
  hourly: {},
};

export const hourlyDataSlice = createSlice({
  name: "hourlyData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHourlyData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHourlyData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as Error;
      state.hourly = {};
    });
    builder.addCase(getHourlyData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};

      const { hourly } = action.payload;

      state.hourly = {
        time: hourly.time,
        weatherCode: hourly.weather_code,
        temperature: hourly.temperature_2m,
      };
    });
  },
});

export default hourlyDataSlice.reducer;
