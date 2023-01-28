// All month and days names
export const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsSortName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysSortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export const
export const dateFormatter = (data, formate) => {
  const realDate = new Date(data);
  switch (formate) {
    case "/":
      return realDate.toLocaleDateString();

    case "-":
      return realDate.toLocaleDateString().replace(/\//g, "-");

    case "sortMonth":
      return monthsSortName[realDate.getMonth()] + " " + realDate.getDate();

    case "fullMonth":
      return monthsName[realDate.getMonth()] + " " + realDate.getDate();

    case "sortMonthAndYear":
      return (
        monthsSortName[realDate.getMonth()] +
        " " +
        realDate.getDate() +
        ", " +
        realDate.getFullYear()
      );

    case "fullMonthAndYear":
      return (
        monthsName[realDate.getMonth()] +
        " " +
        realDate.getDate() +
        ", " +
        realDate.getFullYear()
      );

    default:
      return realDate || new Date();
  }
};

export function getTimeAgo(date, sort = false) {
  if (!date) {
    return "Date is a mandatory field";
  }

  const currentDate = new Date();
  const diff = currentDate - new Date(date);

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (years > 0) {
    return years + (sort ? "y" : years === 1 ? " year" : " years");
  } else if (months > 0) {
    return months + (sort ? "m" : months === 1 ? " month" : " months");
  } else if (weeks > 0) {
    return weeks + (sort ? "w" : weeks === 1 ? " week" : " weeks");
  } else if (days > 0) {
    return days + (sort ? "d" : days === 1 ? " day" : " days");
  } else if (hours > 0) {
    return hours + (sort ? "h" : hours === 1 ? " hour" : " hours");
  } else if (minutes > 0) {
    return minutes + (sort ? "m" : minutes === 1 ? " minute" : " minutes");
  } else {
    return seconds + (sort ? "s" : seconds === 1 ? " second" : " seconds");
  }
}
