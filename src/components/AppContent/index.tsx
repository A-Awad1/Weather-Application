import "./index.scss";
import ConnectFailed from "./ConnectFailed";
import InputSearch from "./InputSearch";
import ResultInfo from "./ResultInfo";
import ResultError from "./ResultError";
import { type MouseEvent, useEffect, useState } from "react";
import { getAddress, getCoords } from "~/utils/methods";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "~/store";
import { setResultError, updatePlace } from "~/store/slices/general";
import { getMainData } from "~/store/thunkMethods";

export default function AppContent() {
  const dispatch = useDispatch<AppDispatch>();

  const { error, loading, current, daily, hourly } = useSelector(
    (state: RootState) => state.mainData
  );

  const noData = !loading && [current, daily, hourly].every((e) => Object.keys(e).length === 0);

  const { resultError } = useSelector((state: RootState) => state.general);

  const [locatePending, setLocatePending] = useState(false);
  const locateMe = async (e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setLocatePending(true);
    dispatch(setResultError(null));

    try {
      const { lat, lng } = await getCoords();
      const location = await getAddress(lat, lng);
      dispatch(updatePlace({ lat, lng, location }));
      dispatch(getMainData({ lat, lng }));
    } catch (error) {
      dispatch(setResultError(error as string));
    } finally {
      setLocatePending(false);
    }
  };

  useEffect(() => {
    locateMe();
  }, []);

  return (
    <>
      {error?.message ? (
        <ConnectFailed />
      ) : (
        <section className="app-content">
          <h2>How's the sky looking today?</h2>
          <section className="search-bar">
            <form>
              <InputSearch />
              <button className="locate-me" disabled={locatePending} onClick={locateMe}>
                {locatePending ? "Locating... " : "Locate Me"}
              </button>
            </form>
          </section>
          {resultError ? <ResultError /> : noData ? <></> : <ResultInfo />}
        </section>
      )}
    </>
  );
}
