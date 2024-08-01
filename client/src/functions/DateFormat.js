const DateFormat = ({ timestamp }) => {
  try {
    if (typeof timestamp !== "number") {
      return "Invalid timestamp";
    }

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}.`;
  } catch (error) {
    console.error("Invalid date format:", error);
    return "Invalid date";
  }
};

export default DateFormat;
