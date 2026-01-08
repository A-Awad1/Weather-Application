import "./DailyForecast.scss";
import ConditionShow from "./ConditionShow";
import ModeIcon from "./ModeIcon";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import { getDayName } from "~/utils/methods";
import { useState } from "react";

function Skeleton() {
  const boxes = Array.from({ length: 7 }, () => null);
  return (
    <>
      {boxes.map((_, i) => (
        <div key={i}>
          <section className="skeleton"></section>
          <h4>-</h4>
          <div className="mode-icon">
            <img src="/general-icons/icon-loading.svg" alt="loading Icon" />
          </div>
          <div>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default function DailyForecast() {
  const { loading: dataLoading, daily: data } = useSelector((state: RootState) => state.mainData);

  const [iconLoad, setIconLoad] = useState(true);
  const finishIconLoad = () => setIconLoad(false);
  const loading = dataLoading || iconLoad;

  return (
    <article className="daily-forecast">
      <h3>Daily forecast</h3>
      <div>
        {loading ? (
          <Skeleton />
        ) : (
          data?.time?.map((e, index) => (
            <div key={e}>
              <h4>{getDayName(e, "short")}</h4>
              <ModeIcon weatherCode={data?.weatherCode[index]} onReady={finishIconLoad} />
              <div>
                <ConditionShow sort="temperature" value={data?.maxTemp[index]} />
                <ConditionShow sort="temperature" value={data?.minTemp[index]} />
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
}
