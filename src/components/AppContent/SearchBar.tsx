import "./SearchBar.scss";
import { type MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch } from "~/store";
import { getMainData } from "~/store/thunkMethods";
import type { RootState } from "~/store";

export default function SearchBar() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMainData({ lat, lng }));
  }, [lat, lng]);

  function search(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <section className="search-bar">
      <form>
        <div className="input-container">
          <label htmlFor="search-input">
            <img src="/general-icons/icon-search.svg" alt="icon search" />
          </label>
          <input id="search-input" type="text" placeholder="Search for a city..." />
        </div>
        <button onClick={search}>search</button>
      </form>
    </section>
  );
}
