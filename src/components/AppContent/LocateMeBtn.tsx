import "./LocateMeBtn.scss";
import { type MouseEvent } from "react";

export default function LocateMeBtn() {
  const locateMe = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <button className="locate-me" onClick={locateMe}>
      Locate Me
    </button>
  );
}
