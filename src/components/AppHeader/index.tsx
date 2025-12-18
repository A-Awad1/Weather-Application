import DropDown from "./DropDown";
import "./index.scss";

export default function AppHeader() {
  return (
    <header className="App-Header">
      <img src="/images/logo.svg" alt="app logo" />
      <DropDown />
    </header>
  );
}
