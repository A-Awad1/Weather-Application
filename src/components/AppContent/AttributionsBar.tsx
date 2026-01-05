import "./AttributionsBar.scss";

export default function AttributionsBar() {
  return (
    <footer className="attributions-bar">
      <p>
        Location data by &#169; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
      </p>
      <p>
        Weather data by &#169; <a href="https://open-meteo.com/">Open-Meteo.com</a>
      </p>
      <p>
        City data from{" "}
        <a
          href="https://npm.io/package/world-cities-json"
          target="_blank"
          rel="noopener noreferrer"
        >
          world-cities-json
        </a>{" "}
        (SimpleMaps World Cities Database by Jet Set Expert), licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
      </p>
    </footer>
  );
}
