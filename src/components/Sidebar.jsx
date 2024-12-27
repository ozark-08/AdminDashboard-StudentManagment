import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherPointed,
  faGaugeHigh,
  faBookOpen,
  faBookBookmark,
  faCircleQuestion,
  faChartPie,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <div className="shadow-xl col-span-1 rounded-md">
        <div className="grid gap-2 grid-rows-6 shadow-xl h-[27rem] rounded-md m-3">
          <div className=" row-span-1 rounded-md mt-5">
            <FontAwesomeIcon icon={faFeatherPointed} />
            <span className=" m-1 text-black text-2xl font-extrabold">QUYL.</span>
          </div>
          <div className="  grid gap-1 grid-rows-6 row-span-5 rounded-md m-2">
            <div className="  grid gap-1 grid-cols-4 rounded-md m-1">
              <div className=" bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faGaugeHigh} />
              </div>
              <div className=" bg-rgb(164 177 215 / 25%) col-span-3 rounded-md m-1 shadow-xl">
                Dasboard
              </div>
            </div>
            <div className=" grid gap-1 grid-cols-4 rounded-md m-1">
              <div className="bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className=" bg-rgb(164 177 215 / 25%)  col-span-3 rounded-md m-1 shadow-xl">
                Students
              </div>
            </div>
            <div className="  grid gap-1 grid-cols-4 rounded-md m-1">
              <div className="bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faBookBookmark} />
              </div>
              <div className="bg-rgb(164 177 215 / 25%)  col-span-3 rounded-md m-1 shadow-xl">
                Chapters
              </div>
            </div>
            <div className="  grid gap-1 grid-cols-4 rounded-md m-1">
              <div className="bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </div>
              <div className="bg-rgb(164 177 215 / 25%)  col-span-3 rounded-md m-1 shadow-xl">
                Help
              </div>
            </div>
            <div className="  grid gap-1 grid-cols-4 rounded-md m-1">
              <div className="bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faChartPie} />
              </div>
              <div className="bg-rgb(164 177 215 / 25%)  col-span-3 rounded-md m-1 shadow-xl">
                Report
              </div>
            </div>
            <div className="  grid gap-1 grid-cols-4 rounded-md m-1">
              <div className="bg-rgb(148 163 184 / 33%)  col-span-1 rounded-md m-1 shadow-xl">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div className="bg-rgb(164 177 215 / 25%)  col-span-3 rounded-md m-1 shadow-xl">
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
