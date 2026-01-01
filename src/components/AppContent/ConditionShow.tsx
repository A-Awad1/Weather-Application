import { useSelector } from "react-redux";
import type { RootState } from "~/store";

interface Props {
  sort: "temp" | "humidity" | "wind" | "precipit";
  value: number;
}

export default function ConditionShow({ sort, value }: Props) {
  const { loading } = useSelector((state: RootState) => state.mainData);

  const rounded = Math.round(value);

  let unit;
  switch (sort) {
    case "temp":
      unit = "°";
      break;
    case "humidity":
      unit = "%";
      break;
    case "wind":
      unit = " km/h";
      break;
    case "precipit":
      unit = " mm";
      break;
  }

  const finalText = loading ? `–` : `${rounded}${unit}`;

  return <span>{finalText}</span>;
}
