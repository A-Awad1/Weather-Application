import "./HourlyForecast.scss";
import ConditionShow from "./ConditionShow";
import DaysSelect from "./DaysSelect";
import ModeIcon from "./ModeIcon";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import { get12Hour } from "~/utils/methods";

function Skeleton() {
  const boxes = Array.from({ length: 8 }, () => null);
  return (
    <>
      {boxes.map((_, i) => (
        <div key={i}>
          <section className="skeleton"></section>
          <div className="mode-icon">
            <img src="/general-icons/icon-loading.svg" alt="loading Icon" />
          </div>
        </div>
      ))}
    </>
  );
}

export default function HourlyForecast() {
  const {
    selectedDay,
    date,
    loading: firstLoading,
    hourly: firstData,
  } = useSelector((state: RootState) => state.mainData);

  const { loading: changedLoading, hourly: changedData } = useSelector(
    (state: RootState) => state.hourlyData
  );

  const isCurrentDay = selectedDay === date.dayName;
  const loading = isCurrentDay ? firstLoading : changedLoading;
  const data = isCurrentDay ? firstData : changedData;

  return (
    <article className="hourly-forecast">
      <div className="head">
        <h3>Hourly forecast</h3>
        <DaysSelect />
      </div>
      <div className="body">
        <div>
          {loading ? (
            <Skeleton />
          ) : (
            data?.time?.map((e, index) => (
              <div key={e}>
                <ModeIcon weatherCode={data?.weatherCode[index]} />
                <span>{get12Hour(e)}</span>
                <ConditionShow sort="temperature" value={data?.temperature[index]} />
              </div>
            ))
          )}
        </div>
      </div>
    </article>
  );
}
