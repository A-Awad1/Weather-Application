import { createSlice } from "@reduxjs/toolkit";
import type { GeneralState } from "~/types";

const initialState: GeneralState = {
  lat: 31.2018,
  lng: 29.9158,
  location: "Berlin, Germany",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export default generalSlice.reducer;
