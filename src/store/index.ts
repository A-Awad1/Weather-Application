import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/general";
import unitsReducer from "./slices/units";
import mainDataReducer from "./slices/mainData";
import hourlyDataReducer from "./slices/hourlyData";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    units: unitsReducer,
    mainData: mainDataReducer,
    hourlyData: hourlyDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
