import type { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { MenuOption as Props } from "~/types";
import type { RootState } from "~/store/index";
import { changeAllUnits } from "~/store/slices/units";
import MenuOption from "./MenuOption";
import "./MenuBox.scss";

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

export default function MenuBox() {
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();
  function switchAll(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(changeAllUnits());
  }

  return (
    <div className="menu-box">
      <form onSubmit={switchAll}>
        <button>
          Switch to <span>{units.toggleTo}</span>
        </button>
        <section>
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
        </section>
      </form>
    </div>
  );
}
