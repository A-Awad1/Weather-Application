import "./SearchBar.scss";
import type { ChangeEvent } from "react";
import type { AppDispatch, RootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { getMainData } from "~/store/thunkMethods";
import LocateMeBtn from "./LocateMeBtn";

export default function SearchBar() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault?.();
    dispatch(getMainData({ lat, lng }));
  };

  return (
    <section className="search-bar">
      <form>
        <div className="input-container">
          <label htmlFor="search-input">
            <img src="/general-icons/icon-search.svg" alt="icon search" />
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Search for a city..."
            onChange={search}
          />
        </div>
        <LocateMeBtn />
      </form>
    </section>
  );
}
