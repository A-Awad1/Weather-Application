import "./DailyForecast.scss";
import ConditionShow from "./ConditionShow";
import ModeIcon from "./ModeIcon";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import { getDayName } from "~/utils/methods";

export default function DailyForecast() {
  const { loading, daily: data } = useSelector((state: RootState) => state.mainData);

  return (
    <article className="daily-forecast">
      <h3>Daily forecast</h3>
      <div>
        {data?.time?.map((e, index) => (
          <div key={e}>
            {loading && <section className="skeleton"></section>}
            <h4>{getDayName(e, "short")}</h4>
            <ModeIcon weatherCode={data?.weatherCode[index]} />
            <div>
              <ConditionShow sort="temp" value={data?.maxTemp[index]} />
              <ConditionShow sort="temp" value={data?.minTemp[index]} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
