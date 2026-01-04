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
    </footer>
  );
}
