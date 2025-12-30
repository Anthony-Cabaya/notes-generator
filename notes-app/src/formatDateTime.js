export const formatDateTime = (value) => {
  if (!value) return "N/A";

  const date = new Date(value);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
};