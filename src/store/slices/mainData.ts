import { createSlice } from "@reduxjs/toolkit";
import { getMainData } from "../thunkMethods";
import type { MainDataState, Error } from "~/types";
import { getReadableDate, getDayName } from "~/utils/methods";

const initialState: MainDataState = {
  loading: true,
  error: {},
  date: {},
  current: {},
  daily: {},
  hourly: {},
  selectedDay: "",
};

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    changeSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMainData.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMainData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as Error;
      state.current = {};
      state.daily = {};
      state.hourly = {};
    });
    builder.addCase(getMainData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};

      const { current, daily, hourly } = action.payload;

      const date = current.time.split("T")[0];
      const dayName = getDayName(date);

      state.selectedDay = dayName;
      state.date = {
        iso: date,
        format: getReadableDate(date),
        dayName,
      };

      state.current = {
        weatherCode: current.weather_code,
        temperature: current.temperature_2m,
        feelsLike: current.apparent_temperature,
        humidity: current.relative_humidity_2m,
        wind: current.wind_speed_10m,
        precipitation: current.precipitation,
      };

      state.daily = {
        time: daily.time,
        weatherCode: daily.weather_code,
        maxTemp: daily.temperature_2m_max,
        minTemp: daily.temperature_2m_min,
      };

      // remove next day hours
      const length = hourly.time.filter((e: string) => e.startsWith(date)).length;
      const futureHours = (prop: string) => hourly[prop].slice(0, length);

      state.hourly = {
        time: futureHours("time"),
        weatherCode: futureHours("weather_code"),
        temperature: futureHours("temperature_2m"),
      };
    });
  },
});

export const { changeSelectedDay } = mainDataSlice.actions;
export default mainDataSlice.reducer;
