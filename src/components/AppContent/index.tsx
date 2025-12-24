import ConnectFailed from "./ConnectFailed";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import "./index.scss";

export default function AppContent() {
  const success = true;
  if (!success) return <ConnectFailed />;

  return (
    <section className="app-content">
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
