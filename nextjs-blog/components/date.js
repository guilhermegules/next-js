import { parseISO, format } from "date-fns";

export default function Date({ stringDate }) {
  const date = parseISO(stringDate);
  return <time dateTime={stringDate}>{format(date, "LLLL d, yyyy")}</time>;
}
