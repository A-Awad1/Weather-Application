import { useSelector } from "react-redux";
import type { RootState } from "~/store";

interface Props {
  sort: "temperature" | "humidity" | "windSpeed" | "precipitation";
  value: number;
}

/*
// temperature: "celsius" - "fahrenheit",
// windSpeed: "kmh" - "mph",
// precipitation: "mm" - "inch",

function convert(value, fromUnit, toUnit) {
    const conversions = {
        // [from, to]: conversion function
        'celsius-fahrenheit': (c) => (c * 9/5) + 32,
        'fahrenheit-celsius': (f) => (f - 32) * 5/9,
        'kmh-mph': (kmh) => kmh * 0.621371,
        'mph-kmh': (mph) => mph * 1.60934,
        'mm-inch': (mm) => mm / 25.4,
        'inch-mm': (inch) => inch * 25.4
    };
    const key = `${fromUnit.toLowerCase()}-${toUnit.toLowerCase()}`;
    const converter = conversions[key];
    if (!converter) throw new Error(`Error`);
    return converter(value);
}

console.log(convert(20, 'celsius', 'fahrenheit')); // 68
console.log(convert(100, 'kmh', 'mph')); // 62.1371
*/

export default function ConditionShow({ sort, value }: Props) {
  const { loading } = useSelector((state: RootState) => state.mainData);

  const rounded = Math.round(value);

  let unit;
  switch (sort) {
    case "temperature":
      unit = "°";
      break;
    case "humidity":
      unit = "%";
      break;
    case "windSpeed":
      unit = " km/h";
      break;
    case "precipitation":
      unit = " mm";
      break;
  }

  const finalText = loading ? `–` : `${rounded}${unit}`;

  return <span>{finalText}</span>;
}
