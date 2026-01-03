import "./index.scss";
import ConnectFailed from "./ConnectFailed";
import SearchBar from "./SearchBar";
import ResultInfo from "./ResultInfo";
import NoResult from "./NoResult";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store";
import { getMainData } from "~/store/thunkMethods";

export default function AppContent() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMainData({ lat, lng }));
  }, [lat, lng]);

  const { error } = useSelector((state: RootState) => state.mainData);
  const resultStatus = true;

  return (
    <>
      {error?.message ? (
        <ConnectFailed />
      ) : (
        <section className="app-content">
          <h2>How's the sky looking today?</h2>
          <SearchBar />
          {resultStatus && <ResultInfo />}
          {!resultStatus && <NoResult />}
        </section>
      )}
    </>
  );
}
