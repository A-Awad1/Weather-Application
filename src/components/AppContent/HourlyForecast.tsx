import ConditionShow from "./ConditionShow";
import DaysSelect from "./DaysSelect";
import ModeIcon from "./ModeIcon";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import "./HourlyForecast.scss";

function formatTime(date: string): string {
  const time = date.split("T")[1];
  const hours = Number(time.split(":")[0]);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;

  return `${displayHour} ${period}`;
}

export default function HourlyForecast() {
  const {
    selectedDay,
    date,
    loading: firstLoading,
    hourly: firstData,
  } = useSelector((state: RootState) => state.mainData);

  const { loading: changeLoading, hourly: changedData } = useSelector(
    (state: RootState) => state.hourlyData
  );

  const loading = firstLoading || changeLoading;
  const data = selectedDay === date.dayName ? firstData : changedData;

  return (
    <article className="hourly-forecast">
      <div className="head">
        <h3>Hourly forecast</h3>
        <DaysSelect />
      </div>
      <div className="body">
        <div>
          {data?.time?.map((e, index) => (
            <div key={e}>
              {loading && <section className="skeleton"></section>}
              <ModeIcon weatherCode={data?.weatherCode[index]} />
              <span>{formatTime(e)}</span>
              <ConditionShow sort="temp" value={data?.temperature[index]} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
