import DaysSelect from "./DaysSelect";
import "./HourlyForecast.scss";

const pending = false;

const info = [
  {
    hour: "3 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "4 PM",
    temp: "20",
    icon: "partly-cloudy",
  },
  {
    hour: "5 PM",
    temp: "20",
    icon: "sunny",
  },
  {
    hour: "6 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "7 PM",
    temp: "20",
    icon: "storm",
  },
  {
    hour: "8 PM",
    temp: "20",
    icon: "snow",
  },
  {
    hour: "9 PM",
    temp: "20",
    icon: "snow",
  },
  {
    hour: "10 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "11 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "12 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "1 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "2 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "3 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "4 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "5 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "6 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "7 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "8 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "9 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "10 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "11 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "12 AM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "1 PM",
    temp: "20",
    icon: "overcast",
  },
  {
    hour: "2 PM",
    temp: "20",
    icon: "overcast",
  },
];

export default function HourlyForecast() {
  return (
    <article className="hourly-forecast">
      <div className="head">
        <h3>Hourly forecast</h3>
        <DaysSelect />
      </div>
      <div className="body">
        <div>
          {info.map((e) => (
            <div key={e.hour}>
              {pending && <section className="skeleton"></section>}
              <img src={`/mode-icons/${e.icon}.webp`} alt="icon mode" />
              <span>{e.hour}</span>
              <span>{e.temp}°</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
