import { GetTestList } from "../Hooks/GetTestList";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export const Dashboard = () => {
  const [Test, setTest] = useState([]);
  const { isLoading, data, isError, error } = GetTestList();

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
