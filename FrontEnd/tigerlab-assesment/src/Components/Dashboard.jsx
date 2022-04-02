import { Header } from "./Header";
import { ProcessTestList } from "./ProcessTestList";

export const Dashboard = () => {
  return (
    <>
      <div className="h-screen bg-gray-200 ">
        <Header />
        <ProcessTestList />
      </div>
    </>
  );
};
