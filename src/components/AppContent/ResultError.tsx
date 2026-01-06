import "./ResultError.scss";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";

export default function ResultError() {
  const { resultError } = useSelector((state: RootState) => state.general);

  return <p className="result-error">{resultError}</p>;
}
