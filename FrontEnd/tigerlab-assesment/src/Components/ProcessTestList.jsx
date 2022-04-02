import { GetTestList } from "../Hooks/GetTestList";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export const ProcessTestList = () => {
  const [Test, setTest] = useState([]);
  const { isLoading, data, isError, error } = GetTestList();

  if (isLoading)
    return (
      <div className="font-semibold mt-10 text-center text-xl 	animate-bounce text-teal-500">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="font-semibold mt-10 text-center text-xl 	 text-teal-500">
        Check Your Network Connection <br />
        Or Contact Our Support For Assistance
      </div>
    );

  useEffect(() => {
    // pushing all children into an array
    let children = [];
    data?.data.tests.map((item) =>
      item.tests.map((subitem) => {
        subitem.category = item.category;
        children.push(subitem);
      })
    );

    setTest(
      children.reduce((acc, curr) => {
        const { category, name, route } = curr;

        if (!acc[category]) {
          acc[category] = {
            items: [],
          };
        }
        acc[category].items.push({ name, route });
        return acc;
      }, {})
    );

    return () => {
      setTest();
    };
  }, [data]);

  return <Card Test={Test} />;
};
