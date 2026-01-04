import { createSlice } from "@reduxjs/toolkit";
import type { GeneralState } from "~/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Place {
  lat: number;
  lng: number;
  location: string;
}

const initialState: GeneralState = {
  lat: null,
  lng: null,
  location: null,
  resultError: null,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    updatePlace: (state, action: PayloadAction<Place>) => {
      const { lat, lng, location } = action.payload;
      state.lat = lat;
      state.lng = lng;
      state.location = location;
    },
    setResultError: (state, action: PayloadAction<string | null>) => {
      state.resultError = action.payload;
    },
  },
});

export const { setResultError, updatePlace } = generalSlice.actions;
export default generalSlice.reducer;
