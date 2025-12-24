import { useState, useRef, Activity, type FocusEvent } from "react";
import "./DaysSelect.scss";
import { weekDays } from "~/utils/constants";
import type { WeekDay } from "~/types";

export default function HeaderMenu() {
  const options = weekDays;
  const [selected, setSelected] = useState(options[0]);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const blurMenu = (event: FocusEvent<HTMLDivElement>) => {
    const target = event.relatedTarget;
    if (!target || !dropDownRef.current?.contains(target)) closeMenu();
  };

  const changeDay = (day: WeekDay) => {
    setSelected(day);
    closeMenu();
  };

  return (
    <div className="days-select" ref={dropDownRef} tabIndex={0} onBlur={blurMenu}>
      <button type="button" onClick={toggleMenu}>
        <span>{selected}</span>
        <img src="/general-icons/icon-dropdown.svg" alt="down arrow" />
      </button>
      <Activity mode={showMenu ? "visible" : "hidden"}>
        <ul>
          {options.map((e) => (
            <li key={e} className={selected === e ? "selected" : ""} onClick={() => changeDay(e)}>
              {e}
            </li>
          ))}
        </ul>
      </Activity>
    </div>
  );
}
