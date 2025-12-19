import { useState, useRef, useEffect, Activity, type MouseEvent } from "react";
import MenuBox from "./MenuBox";
import "./index.scss";

export default function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  function toggleMenu(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  }

  function clickOut(event: globalThis.MouseEvent) {
    const isOut = !dropDownRef?.current?.contains(event.target as Node);
    if (isOut) setShowMenu(false);
  }

  useEffect(() => {
    if (showMenu) document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, [showMenu]);

  return (
    <div className="drop-down" ref={dropDownRef}>
      <button className="head" onClick={toggleMenu}>
        <img className="gear-icon" src="/images/icon-units.svg" alt="settings icon" />
        <span>units</span>
        <img className="arrow-icon" src="/images/icon-dropdown.svg" alt="down arrow" />
      </button>
      <Activity mode={showMenu ? "visible" : "hidden"}>
        <MenuBox />
      </Activity>
    </div>
  );
}
