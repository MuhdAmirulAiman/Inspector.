import { GetTestList } from "../Hooks/GetTestList";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export const Dashboard = () => {
  const [Test, setTest] = useState([]);
  const { data } = GetTestList();

  useEffect(() => {
    // combine all test into one array along with its respective category
    let children = [];
    data?.data.tests.map((item) =>
      item.tests.map((subitem) => {
        subitem.category = item.category;
        children.push(subitem);
      })
    );

    // rearrange above array into sections of their category
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
