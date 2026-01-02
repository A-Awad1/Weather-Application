import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.open-meteo.com/v1/forecast",
  timezone = "auto",
  forecast_hours = 24,
  forecast_days = 7,
  current = [
    "temperature_2m",
    "apparent_temperature",
    "relative_humidity_2m",
    "wind_speed_10m",
    "precipitation",
    "weather_code",
  ].join(","),
  daily = ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(","),
  hourly = ["temperature_2m", "weather_code"].join(",");

export const getMainData = createAsyncThunk(
  "mainData/getMainData",
  async ({ lat, lng }: { lat: number; lng: number }) => {
    const api = `${baseURL}?latitude=${lat}&longitude=${lng}&timezone=${timezone}&forecast_days=${forecast_days}&forecast_hours=${forecast_hours}&current=${current}&daily=${daily}&hourly=${hourly}`;

    const [data] = await Promise.all([
      fetch(api).then((res) => res.json()),
      new Promise((resolve) => setTimeout(resolve, 500)),
    ]);

    return data;
  }
);

export const getHourlyData = createAsyncThunk(
  "hourlyData/getHourlyData",
  async ({ lat, lng, date }: { lat: number; lng: number; date: string }) => {
    const api = `${baseURL}?latitude=${lat}&longitude=${lng}&timezone=${timezone}&hourly=${hourly}&start_date=${date}&end_date=${date}`;

    const [data] = await Promise.all([
      fetch(api).then((res) => res.json()),
      new Promise((resolve) => setTimeout(resolve, 500)),
    ]);

    return data;
  }
);
