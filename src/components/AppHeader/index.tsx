import "./index.scss";
import DropDown from "./DropDown";

export default function AppHeader() {
  return (
    <header className="app-header">
      <img src="/logo.svg" alt="app logo" />
      <DropDown />
    </header>
  );
}
