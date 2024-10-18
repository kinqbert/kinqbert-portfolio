export const getTimeStringFromMilliseconds = (milliseconds: number): string => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerYear = 365.25 * millisecondsPerDay;
  const millisecondsPerMonth = millisecondsPerYear / 12;

  const totalMonths = milliseconds / millisecondsPerMonth;

  const years = Math.floor(totalMonths / 12);
  const months = Math.round(totalMonths % 12);

  const parts = [];

  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (parts.length === 0) {
    return "Less than a month";
  }

  return parts.join(" ");
};
