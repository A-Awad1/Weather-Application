import "./ConnectFailed.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store";
import { getMainData } from "~/store/thunkMethods";

export default function ConnectFailed() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();
  const retry = () => {
    if (lat === null || lng === null) return;
    dispatch(getMainData({ lat, lng }));
  }

  return (
    <section className="connect-failed">
      <div>
        <img src="/general-icons/icon-error.svg" alt="error icon" />
        <h2>Something went wrong</h2>
        <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
        <button onClick={retry}>
          <img src="/general-icons/icon-retry.svg" alt="retry icon" />
          retry
        </button>
      </div>
    </section>
  );
}
