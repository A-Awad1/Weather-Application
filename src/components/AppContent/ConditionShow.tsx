import { useSelector } from "react-redux";
import type { RootState } from "~/store";

interface Props {
  sort: "temperature" | "humidity" | "windSpeed" | "precipitation";
  value: number;
}

export default function ConditionShow({ sort, value }: Props) {
  const { loading } = useSelector((state: RootState) => state.mainData);
  const units = useSelector((state: RootState) => state.units);

  const format = (value: number, unit: string, float: boolean = false): string => {
    if (float) return `${value === 0 ? 0 : value?.toFixed(1)}${unit}`;
    return `${Math.round(value)}${unit}`;
  };

  const converted = (): string => {
    if (sort === "humidity") return format(value, " %");

    const targetUnit = units[sort];

    switch (sort) {
      case "temperature":
        if (targetUnit === "fahrenheit") return format((value * 9) / 5 + 32, "°");
        return format(value, "°");
      case "windSpeed":
        if (targetUnit === "mph") return format(value * 0.621371, " mph");
        return format(value, " km/h");
      case "precipitation":
        if (targetUnit === "inch") return format(value / 25.4, " in", true);
        return format(value, " mm", true);
      default:
        return "–";
    }
  };

  return <span>{loading ? `–` : converted()}</span>;
}
