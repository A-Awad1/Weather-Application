import ConnectFailed from "./ConnectFailed";
import SearchBar from "./SearchBar";
import ResultInfo from "./ResultInfo";
import NoResult from "./NoResult";
import "./index.scss";

export default function AppContent() {
  const success = true;
  if (!success) return <ConnectFailed />;

  const resultStatus = false;

  return (
    <section className="app-content">
      <h2>How's the sky looking today?</h2>
      <SearchBar />
      {resultStatus && <ResultInfo />}
      {!resultStatus && <NoResult />}
    </section>
  );
}
