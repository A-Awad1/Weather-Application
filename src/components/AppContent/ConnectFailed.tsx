import "./ConnectFailed.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store";
import { resetData } from "~/store/slices/mainData";
import { getMainData } from "~/store/thunkMethods";

export default function ConnectFailed() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();
  const retry = () => {
    if (lat === null || lng === null) return;
    dispatch(getMainData({ lat, lng }));
  };
  const goReturn = () => dispatch(resetData());

  return (
    <section className="connect-failed">
      <div>
        <img src="/general-icons/icon-error.svg" alt="error icon" />
        <h2>Something went wrong</h2>
        <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
        <div>
          <button onClick={retry}>
            <img src="/general-icons/icon-retry.svg" alt="retry icon" />
            retry
          </button>
          <button onClick={goReturn}>
            <img src="/general-icons/icon-return.svg" alt="return icon" />
            return
          </button>
        </div>
      </div>
    </section>
  );
}
