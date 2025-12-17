import type { RootState } from "../store/index";
import type { FormEvent, ChangeEvent } from "react";
import type { UnitPayload } from "~/types";
import { useSelector, useDispatch } from "react-redux";
import { changeUnit, changeAllUnits } from "../store/slices/units";

export default function AppHeader() {
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();

  function switchUnit(e: ChangeEvent<HTMLInputElement>) {
    const unit = { key: e.target.name, value: e.target.value };
    dispatch(changeUnit(unit as UnitPayload));
  }

  function switchAll(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(changeAllUnits());
  }

  return (
    <header>
      <img src="/images/logo.svg" alt="app logo" />
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
                <li>
                  <label htmlFor="temp-celsius">Celsius (°C)</label>
                  <input
                    type="radio"
                    name="temperature"
                    id="temp-celsius"
                    value="celsius"
                    checked={units.temperature === "celsius"}
                    onChange={switchUnit}
                  />
                </li>
                <li>
                  <label htmlFor="temp-fahr">Fahrenheit (°F)</label>
                  <input
                    type="radio"
                    name="temperature"
                    id="temp-fahr"
                    value="fahrenheit"
                    checked={units.temperature === "fahrenheit"}
                    onChange={switchUnit}
                  />
                </li>
              </ul>
            </div>
            <div>
              <span>wind speed</span>
              <ul>
                <li>
                  <label htmlFor="wind-kmh">km/h</label>
                  <input
                    type="radio"
                    name="windSpeed"
                    id="wind-kmh"
                    value="kmh"
                    checked={units.windSpeed === "kmh"}
                    onChange={switchUnit}
                  />
                </li>
                <li>
                  <label htmlFor="wind-mph">mph</label>
                  <input
                    type="radio"
                    name="windSpeed"
                    id="wind-mph"
                    value="mph"
                    checked={units.windSpeed === "mph"}
                    onChange={switchUnit}
                  />
                </li>
              </ul>
            </div>
            <div>
              <span>precipitation</span>
              <ul>
                <li>
                  <label htmlFor="Precipit-mm">Millimeters (mm)</label>
                  <input
                    type="radio"
                    name="precipitation"
                    id="Precipit-mm"
                    value="mm"
                    checked={units.precipitation === "mm"}
                    onChange={switchUnit}
                  />
                </li>
                <li>
                  <label htmlFor="Precipit-in">Inches (in)</label>
                  <input
                    type="radio"
                    name="precipitation"
                    id="Precipit-in"
                    value="inch"
                    checked={units.precipitation === "inch"}
                    onChange={switchUnit}
                  />
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
