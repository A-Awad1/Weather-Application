import type { WeekDay } from "~/types";

export function getDayName(date: string | Date, type: "short" | "long" = "long"): string {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "";
  return parsedDate.toLocaleDateString("en-US", { weekday: type });
}

export function getReadableDate(date: string): string {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsedDate);
}

export function get12Hour(date: string): string {
  const time = date.split("T")[1];
  const hours = Number(time.split(":")[0]);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;

  return `${displayHour} ${period}`;
}

export function getFullWeek(startDate: string): WeekDay[] {
  const parsedDate = new Date(startDate);
  if (isNaN(parsedDate.getTime())) return [];

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(parsedDate);
    date.setDate(date.getDate() + index);
    return {
      day: getDayName(date),
      date: date.toISOString().split("T")[0],
    };
  });
}

export async function getCoords(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(
        "Geolocation is not supported by your browser. Please try another browser or search about your city from input field."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lng: longitude });
      },
      () => {
        reject(
          `There is an error in geolocation. Please try again or search about your city from input field.`
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
}

export async function getAddress(
  lat: number,
  lng: number,
  language: string = "en"
): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language}`;

  const response = await fetch(url, { headers: { "User-Agent": "Weather Application" } });

  if (!response.ok) return "";

  const data = await response.json();

  const fullAddress = data?.display_name || null;
  const country = data?.address?.country || null;
  const cityKeys = ["state", "city", "town", "village", "municipality", "hamlet"];
  const cityKey = cityKeys.find((e) => data?.address?.[e]);
  const city = cityKey ? data?.address?.[cityKey] : null;

  if (city && country) return `${city}, ${country}`;
  if (fullAddress) return fullAddress;
  if (city) return city;
  if (country) return country;
  return "";
}
