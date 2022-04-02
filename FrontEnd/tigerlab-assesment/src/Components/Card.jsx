import { useRef, useEffect, useState } from "react";
import { PerformTest } from "../Hooks/PostTest";
import { Flip, toast } from "react-toastify";
import { getCurrentDate, getCurrentTime } from "../Hooks/GetDateTime";
import "react-toastify/dist/ReactToastify.css";

export const Card = ({ Test }) => {
  //Check if Test History array already exist or not in local storage
  //If true,use the existing array, if not, init a new empty array
  const testhistory = JSON.parse(localStorage.getItem("test-history")) || [];
  const [History, setHistory] = useState(testhistory);
  const Route = useRef("");
  const TestName = useRef("");

  const { mutate: performTest, data, isSuccess, isError } = PerformTest();

  const sendPostReq = (route) => {
    Route.current = route;
    performTest(route);
  };

  const success = () => {
    toast.success("Test Resulted In Success", {
      position: "top-center",
      autoClose: 2000,
      transition: Flip,
      theme: "dark",
    });
  };

  const failed = () =>
    toast.error("Test Resulted In Failure", {
      position: "top-center",
      autoClose: 2000,
      transition: Flip,
      theme: "dark",
    });

  useEffect(() => {
    if (isSuccess) {
      console.log(TestName.current, "Performed Successfully");
      if (data.data.result === "true") {
        success();
      } else {
        failed();
      }
      setHistory((prevItems) => {
        let Test = TestName.current;
        let Result;
        if (data.data.result === "true") {
          Result = "Success";
        } else {
          Result = "Failed";
        }

        let Time = getCurrentTime();
        let Date = getCurrentDate();
        const newHistory = [...prevItems, { Test, Date, Time, Result }];
        window.localStorage.setItem("test-history", JSON.stringify(newHistory));
        return newHistory;
      });
    }
    if (isError) {
      console.log(TestName.current, "Failed");
      alert(
        "There's a problem on our side. Please wait or contact our support for assistance. Thank you for understanding."
      );
    }
  }, [data]);

  return (
    <>
      {Object.keys(Test).map((key, index) => (
        <div key={index} className="flex flex-wrap flex-col m-6 mt-5 ">
          <h5 className="category">{`${key}`}</h5>
          <div className="flex flex-wrap flex-col mt-2 pt-1 gap-1 ">
            {Test[key].items.map((test, index) => (
              <div
                onClick={() => {
                  sendPostReq(test.route), (TestName.current = test.name);
                }}
                key={index}
                className="rounded-lg bg-dark-900 text-base w-full p-3 transform transition text-teal-500 duration-500 testcard hover:(cursor-pointer bg-teal-500 text-white scale-102) "
              >
                {test.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
