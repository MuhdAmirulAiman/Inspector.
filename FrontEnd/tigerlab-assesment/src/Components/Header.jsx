import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <nav className="bg-white border-b flex flex-wrap border-teal-500 py-3 pr-4 pl-6 items-center justify-between">
        <Link to="/" className="no-underline">
          <div className="flex flex-shrink-0 text-white mr-6 items-center">
            <img className="w-10" src={logo} alt="Page Logo" />

            <div className="flex flex-col ml-3">
              <span className="text-xl leading-none header_text">
                Inspector.
              </span>
              <span className="text-sm leading-none header_text sm:hidden">
                System Testing &
                <br />
                Microservice Monitoring
              </span>
              <span className="text-sm header_text <sm:hidden">
                System Testing & Microservice Monitoring
              </span>
            </div>
          </div>
        </Link>

        <Link to="/history">
          <AiOutlineHistory
            size={"2.2em"}
            className="mt-2 text-teal-500 hover:text-dark-900 "
          />
        </Link>
      </nav>
    </>
  );
};
