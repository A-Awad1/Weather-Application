import { createAsyncThunk } from "@reduxjs/toolkit";

const values = {
  baseURL: "https://api.open-meteo.com/v1/forecast",
  timezone: "auto",
  forecast_hours: 24,
  forecast_days: 7,
  current: [
    "temperature_2m",
    "apparent_temperature",
    "relative_humidity_2m",
    "wind_speed_10m",
    "precipitation",
    "weather_code",
  ].join(","),
  daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(","),
  hourly: ["temperature_2m", "weather_code"].join(","),
};

export const getMainData = createAsyncThunk(
  "hourlyData/getMainData",
  async ({ lat, lng }: { lat: number; lng: number }) => {
    const api = `${values.baseURL}?latitude=${lat}&longitude=${lng}&timezone=${values.timezone}&forecast_days=${values.forecast_days}&forecast_hours=${values.forecast_hours}&current=${values.current}&daily=${values.daily}&hourly=${values.hourly}`;

    return await fetch(api).then((res) => res.json());
  }
);

export const getHourlyData = createAsyncThunk(
  "hourlyData/getHourlyData",
  async ({ lat, lng, date }: { lat: number; lng: number; date: string }) => {
    const api = `${values.baseURL}?latitude=${lat}&longitude=${lng}&timezone=${values.timezone}&hourly=${values.hourly}&start_date=${date}&end_date=${date}`;

    return await fetch(api).then((res) => res.json());
  }
);
