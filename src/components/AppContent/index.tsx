import "./index.scss";
import ConnectFailed from "./ConnectFailed";
import SearchBar from "./SearchBar";
import ResultInfo from "./ResultInfo";
import NoResult from "./NoResult";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";

export default function AppContent() {
  const { error } = useSelector((state: RootState) => state.mainData);
  if (error?.message) return <ConnectFailed />;

  const resultStatus = true;

  return (
    <section className="app-content">
      <h2>How's the sky looking today?</h2>
      <SearchBar />
      {resultStatus && <ResultInfo />}
      {!resultStatus && <NoResult />}
    </section>
  );
}
