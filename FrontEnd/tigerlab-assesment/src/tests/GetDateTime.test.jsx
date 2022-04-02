import { getCurrentDate, getCurrentTime } from "../Hooks/GetDateTime";

test("Should Return Current Date", () => {
  const date = getCurrentDate();
  expect(date).to.equal(new Date().toDateString());
});

test("Should Return Current Time", () => {
  const time = getCurrentTime();
  expect(time).to.equal(
    new Date()
      .toLocaleTimeString()
      .replace("am", "")
      .replace("pm", "")
      .replace(/ /g, "")
  );
});
