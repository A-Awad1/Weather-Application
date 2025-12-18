import type { RootState } from "../../../store/index";
import type { ChangeEvent } from "react";
import type { MenuOption, UnitPayload } from "~/types";
import { useSelector, useDispatch } from "react-redux";
import { changeUnit } from "../../../store/slices/units";
import "./MenuOption.scss";

export default function MenuOptions({ text, name, id, value }: MenuOption) {
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();

  const checked = units[name] === value;

  function switchUnit(e: ChangeEvent<HTMLInputElement>) {
    const unit = { key: e.target.name, value: e.target.value };
    dispatch(changeUnit(unit as UnitPayload));
  }

  return (
    <li className="menu-option">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={switchUnit}
      />
      <label htmlFor={id}>{text}</label>
      <img src="images/icon-checkmark.svg" alt="check mark" key={value} />
    </li>
  );
}
