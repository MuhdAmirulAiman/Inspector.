import React, { useRef, useEffect, useState } from "react";
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

  //Post Req Function
  const { mutate: performTest, data, isSuccess, isError } = PerformTest();
  const sendPostReq = (route) => {
    Route.current = route;
    performTest(route);
  };

  //Success toast message
  const success = () => {
    toast.success(TestName.current + " Success", {
      position: "top-center",
      autoClose: 2000,
      transition: Flip,
      theme: "dark",
    });
  };

  //Fail toast message
  const fail = () =>
    toast.error(TestName.current + " Fail", {
      position: "top-center",
      autoClose: 2000,
      transition: Flip,
      theme: "dark",
    });

  useEffect(() => {
    if (isSuccess) {
      if (data.data.result === "true") {
        success();
      } else {
        fail();
      }
      // Push Performed Test Into Array In localHistory
      setHistory((prevItems) => {
        let Test = TestName.current;
        let Result;
        if (data.data.result === "true") {
          Result = "Success";
        } else {
          Result = "Fail";
        }

        let Time = getCurrentTime();
        let Date = getCurrentDate();
        const newHistory = [...prevItems, { Test, Date, Time, Result }];
        window.localStorage.setItem("test-history", JSON.stringify(newHistory));
        return newHistory;
      });
    }
    if (isError) {
      alert(
        "There's a problem on our side. Please wait or contact our support for assistance. Thank you for understanding."
      );
    }
  }, [data]);

  return (
    <>
      {Object.keys(Test).map((key, index) => (
        <React.Fragment key={index}>
          <div key={index} className="flex flex-wrap flex-col m-6 mt-5 ">
            <h5 className="category">{`${key}`}</h5>
            <div className="flex mt-2 pt-1 gap-1 md:(text-center p-0) <md:flex-col ">
              {Test[key].items.map((test, index) => (
                <div
                  onClick={() => {
                    sendPostReq(test.route), (TestName.current = test.name);
                  }}
                  key={index}
                  className="rounded-lg bg-dark-900 text-base  p-3 transform transition text-teal-500 duration-200 capitalize testcard hover:(cursor-pointer bg-teal-500 text-white scale-102) "
                >
                  {test.name}
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
