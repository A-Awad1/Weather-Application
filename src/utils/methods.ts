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
