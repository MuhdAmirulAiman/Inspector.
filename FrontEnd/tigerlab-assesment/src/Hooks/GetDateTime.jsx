export const getCurrentDate = () => {
  let today = new Date();
  return today.toDateString();
};

export const getCurrentTime = () => {
  let today = new Date();
  let time = today.toLocaleTimeString().replace(/am|pm|AM|PM|\s/g, "");
  return time;
};
