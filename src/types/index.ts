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

export type WeekDay =
  | "saturday"
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export type Error = Record<string, unknown>;

type EmptyRecord = Record<string, never>;

interface DateInfo {
  iso: string;
  format: string;
  dayName: string;
}

interface CurrentWeather {
  weatherCode: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
}

interface DailyWeather {
  time: string[];
  weatherCode: number[];
  maxTemp: number[];
  minTemp: number[];
}

interface HourlyWeather {
  time: string[];
  weatherCode: number[];
  temperature: number[];
}

export interface GeneralState {
  lat: number;
  lng: number;
  location: string;
}

export interface MainDataState {
  loading: boolean;
  error: Error;
  date: DateInfo | EmptyRecord;
  current: CurrentWeather | EmptyRecord;
  daily: DailyWeather | EmptyRecord;
  hourly: HourlyWeather | EmptyRecord;
  selectedDay: string;
}
export interface HourlyDataState {
  loading: boolean;
  error: Error;
  hourly: HourlyWeather | EmptyRecord;
}
