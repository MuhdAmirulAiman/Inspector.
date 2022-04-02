import React, { useState } from "react";
import { Link } from "react-router-dom";

export const History = () => {
  const [History, setHistory] = useState(
    JSON.parse(localStorage.getItem("test-history"))
  );

  const backToDashBoardBtn = (
    <div className="bg-dark-900 backtodashboardbtn">
      <Link to="/" className="text-white no-underline">
        Back To Dashboard
      </Link>
    </div>
  );

  return (
    <div className="bg-gray-200">
      <div className="rounded-m pt-6 pb-4 sm:px-4 ">
        {History === null ? (
          <div className="mt-10 text-center">
            <p className="font-medium text-xl text-gray-800  ">
              No Test Performed Yet...
            </p>
            {backToDashBoardBtn}
          </div>
        ) : (
          <>
            {backToDashBoardBtn}
            <table
              cellPadding={10}
              className="bg-white rounded-t-lg  m-auto  w-full table-fixed lg:w-[70%]"
            >
              <thead className="border border-teal-500">
                <tr key={"header"}>
                  {Object.keys(History[0]).map((item, i) => (
                    <React.Fragment key={i}>
                      {item === "Test" ? (
                        <th
                          key={i}
                          className="text-center tableheader <sm:w-[6em]"
                        >
                          {item}
                        </th>
                      ) : (
                        <th key={i} className="text-center tableheader">
                          {item}
                        </th>
                      )}
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {History.reverse().map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-teal-500 py-4 hover:bg-gray-400"
                  >
                    {Object.values(item).map((val, i) => (
                      <td
                        className="border-x border-teal-500 text-sm text-center capitalize"
                        key={i}
                      >
                        {val === "Fail" ? (
                          <p className="text-red-500">{val}</p>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
