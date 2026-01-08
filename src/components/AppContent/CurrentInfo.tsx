import "./CurrentInfo.scss";
import DotsLoader from "./DotsLoader";
import ConditionShow from "./ConditionShow";
import ModeIcon from "./ModeIcon";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import { useState } from "react";

export default function CurrentInfo() {
  const { location } = useSelector((state: RootState) => state.general);
  const {
    loading: dataLoading,
    date,
    current: data,
  } = useSelector((state: RootState) => state.mainData);

  const [iconLoad, setIconLoad] = useState(true);

  const loading = dataLoading || iconLoad;

  return (
    <section className="current-info">
      <article className="main-info">
        {loading && <DotsLoader />}
        <div>
          <span className="location">{location}</span>
          <span className="date">{date?.format}</span>
        </div>
        <div>
          <ModeIcon weatherCode={data?.weatherCode} onReady={() => setIconLoad(false)} />
          <ConditionShow sort="temperature" value={data?.temperature} />
        </div>
      </article>
      <article className="detailed-info">
        <div>
          <h4>feels like</h4>
          <ConditionShow sort="temperature" value={data?.feelsLike} />
        </div>
        <div>
          <h4>humidity</h4>
          <ConditionShow sort="humidity" value={data?.humidity} />
        </div>
        <div>
          <h4>wind</h4>
          <ConditionShow sort="windSpeed" value={data?.wind} />
        </div>
        <div>
          <h4>precipitation</h4>
          <ConditionShow sort="precipitation" value={data?.precipitation} />
        </div>
      </article>
    </section>
  );
}
