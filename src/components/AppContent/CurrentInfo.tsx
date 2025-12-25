import "./CurrentInfo.scss";
import DotsLoader from "./DotsLoader";

const pending = false;
const text = (text: string) => (pending ? `–` : text);

const location = "Berlin, Germany";
const date = "Tuesday, Aug 5, 2025";
const mode = "sunny";
const icon = `/mode-icons/${mode}.webp`;
const temp = 20;

const feelsLike = 18;
const humidity = 46;
const wind = 14;
const precipitation = 0;

export default function CurrentInfo() {
  return (
    <section className="current-info">
      <article className="main-info">
        {pending && <DotsLoader />}
        <div>
          <span className="location">{location}</span>
          <span className="date">{date}</span>
        </div>
        <div>
          <img src={icon} alt="mode icon" />
          <span>{temp}°</span>
        </div>
      </article>
      <article className="detailed-info">
        <div>
          <h4>feels like</h4>
          <span>{text(`${feelsLike}°`)}</span>
        </div>
        <div>
          <h4>humidity</h4>
          <span>{text(`${humidity}%`)}</span>
        </div>
        <div>
          <h4>wind</h4>
          <span>{text(`${wind} km/h`)}</span>
        </div>
        <div>
          <h4>precipitation</h4>
          <span>{text(`${precipitation} mm`)}</span>
        </div>
      </article>
    </section>
  );
}
