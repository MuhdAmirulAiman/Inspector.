export const getCurrentDate = () => {
  var today = new Date();
  return today.toDateString();
};
export const getCurrentTime = () => {
  var today = new Date();
  var time = today.toLocaleTimeString().replace(/am|pm|AM|PM|\s/g, "");
  return time;
};
