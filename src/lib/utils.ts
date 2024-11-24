import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getMonth(month = dayjs().month(), year = dayjs().year()) {
  const firstDayofTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayofTheMonth;
  const dayMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount)).toISOString();
    });
  });

  return dayMatrix;
};

const deserializeDate = (dateString: string) => dayjs(dateString);

export const deserializeMonth = (month: any) => {
  return month.map((week: any) =>
    week.map((dayString: any) => deserializeDate(dayString))
  );
};

export function excludeDisabledWeek(month: any) {
  const lastWeek = month.slice(5)[0]
  const lastRow = lastWeek.find((date: any) => { return date.date() > 18 })
  if (!lastRow) {
    return { month: month.slice(0, 5), lastRow: false };
  }
  if (lastRow) {
    return { lastRow: true, month };
  }
};

export function getDayHours(day = dayjs().date(), month = dayjs().month(), year = dayjs().year()) {
  const hourMatrix = new Array(1).fill([]).map(() => {
    return new Array(24).fill(null).map((_, hour) => {
      return dayjs(new Date(year, month, day, hour)).toISOString();
    });
  });

  return hourMatrix;
};

export function deserializeDayHours(hourMatrix: any) {
  return hourMatrix[0].map((isoString: string) => {
    return dayjs(isoString).format('HH:mm');
  });
};

export function getCurrentDay(day: any) {
  return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
};