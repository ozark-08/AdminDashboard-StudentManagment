import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleQuestion,
  faMessage,
  faSliders,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="grid gap-1 grid-cols-2 row-span-1 rounded-md">
        <div className="  grid place-content-center grid-cols-1 rounded-md m-2 ">
          <div className="  grid place-content-center grid-cols-1 rounded-md p-2">
            <div className=" grid grid-cols-5 rounded-md p-2 shadow-xl">
              <div className="  col-span-1 rounded-md m-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className=" border border-l-rose-300 col-span-4 rounded-md m-1">
                search your course...
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-md">
          <div className=" bg-red-50  grid place-content-center grid-cols-2 rounded-md mt-10 p-2">
            <div className="  grid place-content-center grid-cols-1 rounded-md m-1 p-2">
              <div className=" grid gap-1 grid-cols-4 rounded-md">
                <div className="rounded-md ">
                  <Link to="/help">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </Link>
                </div>
                <div className="rounded-md ">
                  <Link to="/message">
                    <FontAwesomeIcon icon={faMessage} />
                  </Link>
                </div>
                <div className="rounded-md ">
                  <Link to="/setting">
                    <FontAwesomeIcon icon={faSliders} />
                  </Link>
                </div>
                <div className="rounded-md ">
                  <Link to="notify">
                    <FontAwesomeIcon icon={faBell} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-md m-4 p-2">
              <div className=" m-1 grid gap-1 grid-cols-2 rounded-md">
                <img
                  src="..\src\assets\man.png"
                  alt="man"
                  className="w-[45px] ml-[41px]"
                />
                <p className=" font-semibold text-lg">M. Darcy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
