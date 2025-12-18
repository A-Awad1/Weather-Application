import type { RootState } from "../../store/index";
import type { FormEvent } from "react";
import type { MenuOption as Props } from "~/types";
import { useSelector, useDispatch } from "react-redux";
import { changeAllUnits } from "../../store/slices/units";
import MenuOption from "./MenuOption";

const options: Record<string, Props> = {
  "temp-celsius": {
    id: "temp-celsius",
    text: "Celsius (°C)",
    name: "temperature",
    value: "celsius",
  },
  "temp-fahr": {
    id: "temp-fahr",
    text: "Fahrenheit (°F)",
    name: "temperature",
    value: "fahrenheit",
  },
  "wind-kmh": {
    id: "wind-kmh",
    text: "km/h",
    name: "windSpeed",
    value: "kmh",
  },
  "wind-mph": {
    id: "wind-mph",
    text: "mph",
    name: "windSpeed",
    value: "mph",
  },
  "precipit-mm": {
    id: "precipit-mm",
    text: "Millimeters (mm)",
    name: "precipitation",
    value: "mm",
  },
  "precipit-in": {
    id: "precipit-in",
    text: "Inches (in)",
    name: "precipitation",
    value: "inch",
  },
};

export default function HeaderMenu() {
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();

  function switchAll(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(changeAllUnits());
  }

  return (
    <div className="drop-down">
      <div className="head">
        <img src="/images/icon-units.svg" alt="settings icon" />
        <span>units</span>
        <img src="/images/icon-dropdown.svg" alt="down arrow" />
      </div>
      <div className="menu">
        <form onSubmit={switchAll}>
          <button>switch to {units.toggleTo}</button>
          <div>
            <span>temperature</span>
            <ul>
              <MenuOption {...options["temp-celsius"]} />
              <MenuOption {...options["temp-fahr"]} />
            </ul>
          </div>
          <div>
            <span>wind speed</span>
            <ul>
              <MenuOption {...options["wind-kmh"]} />
              <MenuOption {...options["wind-mph"]} />
            </ul>
          </div>
          <div>
            <span>precipitation</span>
            <ul>
              <MenuOption {...options["precipit-mm"]} />
              <MenuOption {...options["precipit-in"]} />
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
