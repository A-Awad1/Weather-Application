export type UnitSystem = "metric" | "imperial";

export interface Unit {
  system: UnitSystem;
  toggleTo: UnitSystem;
  temperature: "celsius" | "fahrenheit";
  windSpeed: "kmh" | "mph";
  precipitation: "mm" | "inch";
}

export type UnitPayload = { [K in keyof Unit]: { key: K; value: Unit[K] } }[keyof Unit];

export interface MenuOption {
  text: string;
  id: string;
  name: keyof Unit;
  value: Unit[keyof Unit];
}
