import "./InputSearch.scss";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { AppDispatch } from "~/store";
import { useDispatch } from "react-redux";
import { getMainData } from "~/store/thunkMethods";
import { setResultError, updatePlace } from "~/store/slices/general";
import worldCities, { type City } from "world-cities-json";

const cities: City[] = worldCities.cities as City[];
const patch = 10;

export default function InputSearch() {
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState("");
  const [match, setMatch] = useState<City[]>([]);
  const [visibleCount, setVisibleCount] = useState(patch);

  const opened = match.length > 0;
  const displayData = match.slice(0, visibleCount);
  const loadMoreBtn = visibleCount < match.length;

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setQuery(value);
    setVisibleCount(patch);

    if (value.trim().length < 2) {
      setMatch([]);
      return;
    }

    const escaped = value.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    const result = cities.filter((e) => {
      return (
        regex.test(e.city_ascii) ||
        regex.test(e.country) ||
        regex.test(e.admin_name) ||
        regex.test(`${e.city_ascii}, ${e.country}`) ||
        regex.test(`${e.city_ascii}, ${e.admin_name}`) ||
        regex.test(`${e.admin_name}, ${e.country}`)
      );
    });

    setMatch(result);
  };

  const loadMore = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setVisibleCount((prev) => prev + patch);
  };

  const choose = (city: City, e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    setMatch([]);
    setQuery("");

    const lat = Number(city.lat);
    const lng = Number(city.lng);
    const location = `${city.city_ascii}, ${city.country}`;

    dispatch(setResultError(null));
    dispatch(updatePlace({ lat, lng, location }));
    dispatch(getMainData({ lat, lng }));
  };

  return (
    <div className="input-search">
      <label htmlFor="search-input">
        <img src="/general-icons/icon-search.svg" alt="icon search" />
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search for a city..."
        autoComplete="off"
        value={query}
        onChange={search}
      />

      {opened && (
        <div className="drop-down">
          <ul>
            {displayData.map((e) => (
              <li key={e.id}>
                <button onClick={(event) => choose(e, event)}>
                  <span>
                    {e.city_ascii}
                    {e?.admin_name && `, ${e.admin_name}`}
                  </span>
                  <span>{e.country}</span>
                </button>
              </li>
            ))}
          </ul>
          {loadMoreBtn && (
            <button className="load-more" onClick={loadMore}>
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
