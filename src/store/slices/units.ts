import { createSlice } from "@reduxjs/toolkit";
import { metric, unitSystems } from "~/utils/constants";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UnitPayload, Unit } from "~/types";

export const unitsSlice = createSlice({
  name: "units",
  initialState: metric,
  reducers: {
    changeUnit: (state, action: PayloadAction<UnitPayload>) => {
      const { key, value } = action.payload;
      (state[key] as Unit[typeof key]) = value;

      const mergeValues = new Set([
        ...Object.values(state),
        ...Object.values(unitSystems[state.system]),
      ]);

      if (mergeValues.size < 7) return;
      const [system, toggleTo] = [state.toggleTo, state.system];
      state.system = system;
      state.toggleTo = toggleTo;
    },
    changeAllUnits: (state) => {
      return unitSystems[state.toggleTo];
    },
  },
});

export const { changeUnit, changeAllUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
