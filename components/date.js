export default function DateComponent({ dateString }) {
  const date = new Date(dateString).toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  return <time dateTime={dateString}>{date}</time>;
}
