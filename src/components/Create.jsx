import React from "react";
import { useState } from "react";
import { addStudent } from "../store/studentSlice";
import { useDispatch } from "react-redux";
import supabase from "../config/SupabaseClient";
import { useNavigate } from "react-router-dom";

function Create() {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addStudent(input));

    const { data, error } = await supabase.from("Student").insert([
      {
        status: true,
        ...input,
      },
    ]);

    try {
      console.log("data submitted!!", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-emerald-100">
      <div className=" w-96 p-6 shadow-lg rounded-md bg-slate-100">
        <h1 className=" text-3xl block text-center font-semibold">
          Student Data
        </h1>
        <hr className="mt-3 border-b-1 border-gray-900" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="student_name" className=" block text-base mb-2">
              Name
            </label>
            <input
              type="text"
              id="student_name"
              name="student_name"
              value={input.student_name || ""}
              onChange={handleChange}
              className="m-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="cohort" className=" block text-base mb-2">
              Cohort
            </label>
            <input
              type="text"
              id="cohort"
              name="cohort"
              value={input.cohort || ""}
              onChange={handleChange}
              className="m-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400"
              placeholder="Enter your cohort(AY 2024-25)"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="courses" className=" block text-base mb-2">
              Courses
            </label>
            <input
              type="text"
              id="courses"
              name="courses"
              value={input.courses || ""}
              onChange={handleChange}
              className="m-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400"
              placeholder="Enter your course(CBSE 9 __)"
            />
          </div>
          <button className=" bg-lime-200 rounded-md shadow-xl m-2 p-2">
            Save Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
