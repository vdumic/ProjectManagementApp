import { parseISO, format } from "date-fns";

const DateFormat = ({ dateString }) => {
  try {
    if (typeof dateString !== "string") {
      console.error("Invalid date format:", dateString);
      return "Invalid date";
    }
    const date = parseISO(dateString);
    return format(date, "dd.MM.yyyy.");
  } catch (error) {
    console.error("Invalid date format:", error);
    return "Invalid date";
  }
};

export default DateFormat;
