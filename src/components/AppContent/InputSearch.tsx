import "./InputSearch.scss";
import type { ChangeEvent } from "react";
import type { AppDispatch, RootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { getMainData } from "~/store/thunkMethods";

export default function InputSearch() {
  const { lat, lng } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch<AppDispatch>();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault?.();
    if (lat === null || lng === null) return;
    dispatch(getMainData({ lat, lng }));
  };

  return (
    <div className="input-search">
      <label htmlFor="search-input">
        <img src="/general-icons/icon-search.svg" alt="icon search" />
      </label>
      <input id="search-input" type="text" placeholder="Search for a city..." onChange={search} />
    </div>
  );
}
