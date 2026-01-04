import "./index.scss";
import ConnectFailed from "./ConnectFailed";
import SearchBar from "./SearchBar";
import ResultInfo from "./ResultInfo";
import ResultError from "./ResultError";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";

export default function AppContent() {
  const { error } = useSelector((state: RootState) => state.mainData);
  const { resultError } = useSelector((state: RootState) => state.general);

  return (
    <>
      {error?.message ? (
        <ConnectFailed />
      ) : (
        <section className="app-content">
          <h2>How's the sky looking today?</h2>
          <SearchBar />
          {resultError ? <ResultError /> : <ResultInfo />}
        </section>
      )}
    </>
  );
}
