import "./DailyForecast.scss";

const pending = false;

export default function DailyForecast() {
  const info = [
    {
      day: "tue",
      maxTemp: "20",
      minTemp: "14",
      icon: "drizzle",
    },
    {
      day: "wed",
      maxTemp: "21",
      minTemp: "15",
      icon: "rain",
    },
    {
      day: "thu",
      maxTemp: "24",
      minTemp: "14",
      icon: "sunny",
    },
    {
      day: "fri",
      maxTemp: "25",
      minTemp: "13",
      icon: "partly-cloudy",
    },
    {
      day: "sat",
      maxTemp: "21",
      minTemp: "15",
      icon: "storm",
    },
    {
      day: "sun",
      maxTemp: "25",
      minTemp: "16",
      icon: "snow",
    },
    {
      day: "mon",
      maxTemp: "24",
      minTemp: "15",
      icon: "fog",
    },
  ];

  return (
    <article className="daily-forecast">
      <h3>Daily forecast</h3>
      <div>
        {info.map((e) => (
          <div key={e.day}>
            {pending && <section className="skeleton"></section>}
            <h4>{e.day}</h4>
            <img src={`/mode-icons/${e.icon}.webp`} alt="mode icon" />
            <div>
              <span>{e.maxTemp}°</span>
              <span>{e.minTemp}°</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
