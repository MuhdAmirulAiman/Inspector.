export const getCurrentDate = () => {
  var today = new Date();
  return today.toDateString();
};
export const getCurrentTime = () => {
  var today = new Date();
  var time = today
    .toLocaleTimeString()
    .replace("am", "")
    .replace("pm", "")
    .replace(/ /g, "");
  return time;
};
