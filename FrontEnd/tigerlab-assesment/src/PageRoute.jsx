import { Dashboard } from "./Components/Dashboard";
import { History } from "./Components/History";
import { NotFoundPage } from "./Components/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";

export const PageRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
