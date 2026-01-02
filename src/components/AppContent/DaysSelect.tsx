import "./DaysSelect.scss";
import { useState, useRef, Activity, type FocusEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { WeekDay } from "~/types";
import type { RootState, AppDispatch } from "~/store";
import { changeSelectedDay } from "~/store/slices/mainData";
import { getHourlyData } from "~/store/thunkMethods";
import { getFullWeek } from "~/utils/methods";

export default function DaysSelect() {
  const {
    loading,
    date: currentDate,
    selectedDay,
  } = useSelector((state: RootState) => state.mainData);
  const dispatch = useDispatch<AppDispatch>();

  const week = getFullWeek(currentDate?.iso);

  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => {
    if (loading) return;
    setShowMenu((prev) => !prev);
  };
  const blurMenu = (event: FocusEvent<HTMLDivElement>) => {
    const target = event.relatedTarget;
    if (!target || !dropDownRef.current?.contains(target)) closeMenu();
  };

  const { lat, lng } = useSelector((state: RootState) => state.general);

  const changeDay = ({ day, date }: WeekDay) => {
    closeMenu();
    if (day === selectedDay) return;
    dispatch(changeSelectedDay(day));
    if (day === currentDate.dayName) return;
    dispatch(getHourlyData({ lat, lng, date }));
  };

  return (
    <div className="days-select" ref={dropDownRef} tabIndex={0} onBlur={blurMenu}>
      <button type="button" onClick={toggleMenu}>
        <span>{loading ? `–` : selectedDay}</span>
        <img src="/general-icons/icon-dropdown.svg" alt="down arrow" />
      </button>
      <Activity mode={showMenu ? "visible" : "hidden"}>
        <ul>
          {week.map((e) => (
            <li
              key={e?.day}
              className={selectedDay === e?.day ? "selected" : ""}
              onClick={() => changeDay(e)}
            >
              {e?.day}
            </li>
          ))}
        </ul>
      </Activity>
    </div>
  );
}
