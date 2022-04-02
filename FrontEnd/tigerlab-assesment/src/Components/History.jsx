import { Header } from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
export const History = () => {
  const [History, setHistory] = useState(
    JSON.parse(localStorage.getItem("test-history"))
  );

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="rounded-m pt-6 pb-4 sm:px-4 ">
        {History === null ? (
          <div className="mt-10 text-center">
            <p className="font-medium text-xl text-gray-800  ">
              No Test Performed Yet...
            </p>
            <div className="bg-dark-900 backtodashboardbtn">
              <Link to="/" className="text-white no-underline">
                Back To Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-dark-900 backtodashboardbtn">
              <Link to="/" className="text-white no-underline">
                Back To Dashboard
              </Link>
            </div>
            <table
              cellPadding={10}
              className="bg-white rounded-t-lg  m-auto  w-full table-fixed lg:w-[70%]"
            >
              <thead className="border border-teal-500">
                <tr key={"header"}>
                  <th className="font-medium bg-dark-900 text-center text-md text-left text-teal-500 <sm:w-[6em] ">
                    {Object.keys(History[0])[0]}
                  </th>
                  <th className="text-center tableheader">
                    {Object.keys(History[0])[1]}
                  </th>
                  <th className="text-center tableheader">
                    {Object.keys(History[0])[2]}
                  </th>
                  <th className="text-center tableheader">
                    {Object.keys(History[0])[3]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {History.reverse().map((item, i) => (
                  <tr
                    key={i}
                    className="border border-teal-500 py-4 hover:bg-gray-400"
                  >
                    {Object.values(item).map((val, i) => (
                      <td
                        className="border-l border-teal-500 text-sm text-center"
                        key={i}
                      >
                        {val}
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
