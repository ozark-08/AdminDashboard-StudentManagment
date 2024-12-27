import React from "react";
// components:
import StudentData from "./StudentData";

function Table({ students }) {
  return (
    <>
      <table className=" bg-slate-100 w-auto ml-[36px] border-separate border-spacing-2">
        <thead>
          <tr>
            <th className=" text-emerald-800 pl-[3px] ">Student name</th>
            <th className=" text-emerald-800 px-4 py-5">Cohort</th>
            <th className=" text-emerald-800 px-4 py-5">Courses</th>
            <th className=" text-emerald-800 pl-[3px]">Date joined</th>
            <th className=" text-emerald-800 px-10 py-5">Last login</th>
            <th className=" text-emerald-800 px-10 py-5">status</th>
            <th className=" text-emerald-800 px-10 py-5">action</th>
          </tr>
        </thead>
        <tbody>
          <StudentData students={students} />
        </tbody>
      </table>
    </>
  );
}

export default Table;
