import type { Unit, UnitSystem, WeekDay } from "~/types";

export const metric: Unit = {
  system: "metric",
  toggleTo: "imperial",
  temperature: "celsius",
  windSpeed: "kmh",
  precipitation: "mm",
};

export const imperial: Unit = {
  system: "imperial",
  toggleTo: "metric",
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "inch",
};

export const unitSystems: Record<UnitSystem, Unit> = {
  metric,
  imperial,
};

export const weekDays: WeekDay[] = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
