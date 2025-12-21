import { type MouseEvent } from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  function search(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <section className="search-bar">
      <form>
        <div className="input-container">
          <label htmlFor="search-input">
            <img src="/images/icon-search.svg" alt="icon search" />
          </label>
          <input id="search-input" type="text" placeholder="Search for a city..." />
        </div>
        <button onClick={search}>search</button>
      </form>
    </section>
  );
}
