import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StudentData({ students }) {
  return (
    <>
      {students.map((student) => {
        const {
          id,
          student_name,
          cohort,
          courses,
          date_joined,
          last_login,
          status,
        } = student;

        const formatDate = (timestamp) => {
          const date = new Date(timestamp);
          const day = String(date.getDate()); // Day of the month
          const month = date.toLocaleString("en-US", { month: "short" }); // Short month name
          const year = date.getFullYear(); // Year
          const hours = date.getHours(); // Hours in 24-hour format
          const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutes
          const ampm = hours >= 12 ? "pm" : "am"; // AM or PM
          const formattedHours = hours % 12 || 12; // Convert to 12-hour format
          return timestamp == last_login
            ? `${day}, ${month} ${year} ${formattedHours}:${minutes}${ampm}`
            : `${day}, ${month} ${year}`;
        };

        return (
          <>
            <tr key={id} className=" m-1 text-md border-b-2 border-green-950">
              <td className="m-6 p-2">{student_name}</td>
              <td>{cohort}</td>
              <td className=" grid gap-1 grid-cols-2 m-1 p-2">
                <div className="p-1">{courses}</div>
                <div className="p-1">CBSE 9 Math</div>
              </td>
              <td className="p-2 ">{formatDate(date_joined)}</td>
              <td className=" m-1">{formatDate(last_login)}</td>
              <td className="pl-12">
                {status == true ? (
                  <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                ) : (
                  <div className="h-4 w-4 bg-red-700 rounded-full"></div>
                )}
              </td>
              <td>
                <Link to={"/" + id}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default StudentData;
