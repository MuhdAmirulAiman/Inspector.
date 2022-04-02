import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div className="m-auto mt-22 text-center">
      <div className="bg-dark-900 backtodashboardbtn">
        <Link to="/" className="text-white no-underline">
          Back To Dashboard
        </Link>
      </div>
      <div className="font-bold text-2xl">
        <h3>Oops! Page not found.</h3>
        <h1 className="font-semibold text-black text-6xl underline underline-teal-500">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <h2 className="font-bold mt-4 text-xl">
        We are sorry, but the page you requested was not found.
      </h2>
    </div>
  );
};
