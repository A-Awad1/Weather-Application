import "./index.scss";
import DropDown from "./DropDown";

export default function AppHeader() {
  return (
    <header className="App-Header">
      <img src="/logo.svg" alt="app logo" />
      <DropDown />
    </header>
  );
}
