import CurrentInfo from "./CurrentInfo";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import "./index.scss";
import SearchBar from "./SearchBar";

export default function ConnectSuccess() {
  return (
    <section className="connect-success">
      <h2>How's the sky looking today?</h2>
      <SearchBar />
      <div className="result-info">
        <div>
          <CurrentInfo />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </section>
  );
}
