import "./ResultInfo.scss";
import CurrentInfo from "./CurrentInfo";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function ResultInfo() {
  return (
    <div className="result-info">
      <div>
        <CurrentInfo />
        <DailyForecast />
      </div>
      <HourlyForecast />
    </div>
  );
}
