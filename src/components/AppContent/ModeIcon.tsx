import "./ModeIcon.scss";
interface ModeIcon {
  icon: string;
  codes: number[];
}

function specifyIcon(code: number): string {
  const icons: ModeIcon[] = [
    { icon: "sunny", codes: [0, 1] },
    { icon: "cloudy", codes: [2] },
    { icon: "overcast", codes: [3] },
    { icon: "fog", codes: [45, 48] },
    { icon: "drizzle", codes: [51, 53, 55, 56, 57] },
    { icon: "rain", codes: [61, 63, 65, 66, 67, 80, 81, 82] },
    { icon: "snow", codes: [71, 73, 75, 77, 85, 86] },
    { icon: "storm", codes: [95, 96, 99] },
  ];

  const match = icons.find((e) => e.codes.includes(code));
  return match?.icon || "unknown";
}

export default function ModeIcon({
  weatherCode,
  onReady,
}: {
  weatherCode: number;
  onReady?: () => void;
}) {
  const icon = specifyIcon(weatherCode);
  return (
    <div className="mode-icon">
      <img src={`/mode-icons/${icon}.webp`} alt="mode icon" onLoad={() => onReady?.()} />
    </div>
  );
}
