import type { MouseEvent } from "react";
import MenuBox from "./MenuBox";
import "./index.scss";

export default function HeaderMenu() {
  function openMenu(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div className="drop-down">
      <button className="head" onClick={openMenu}>
        <img className="gear-icon" src="/images/icon-units.svg" alt="settings icon" />
        <span>units</span>
        <img className="arrow-icon" src="/images/icon-dropdown.svg" alt="down arrow" />
      </button>
      <MenuBox />
    </div>
  );
}
