import React from "react";
// components
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DisplayGrid({ students, error }) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" grid gap-1 grid-rows-6 shadow-xl row-span-4 rounded-md">
        <div className="grid gap-1 grid-cols-6 border border-red-100 row-span-1 rounded-md  m-1">
          <div className=" grid gap-1 grid-cols-2 col-span-3 rounded-md m-1">
            <div className=" flex items-center rounded-md">
              <div className=" bg-gray-400 m-2 p-2  rounded-md shadow-xl">
                AY 2024-25 ↓
              </div>
              <div className=" bg-gray-400  m-2 p-2  rounded-md shadow-xl">
                CBSE 9 ↓
              </div>
            </div>
          </div>
          <div className=" col-span-3 rounded-md m-1">
            <div className=" mt-8">
              {" "}
              <button
                className=" bg-gray-400 rounded-md shadow-xl p-[8px]"
                onClick={() => navigate("/create")}
              >
                <FontAwesomeIcon icon={faPlus} /> Add new student
              </button>
            </div>
          </div>
        </div>

        <div className=" row-span-5 rounded-md shadow-xl m-1">
          {error && <p>{error}</p>}
          {students && (
            <div className="m-2 rounded-md">
              <Table students={students} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DisplayGrid;
