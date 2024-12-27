import React, { useEffect, useState } from "react";
import { replace, useParams } from "react-router-dom";
import supabase from "../config/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { updateStudent } from "../store/studentSlice";
import { useDispatch } from "react-redux";

function Update() {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchId = async () => {
      const { data, error } = await supabase
        .from("Student")
        .select()
        .eq("id", id)
        .single();

      try {
        console.log("data: ", data);
        setUpdatedData({
          student_name: data.student_name,
          cohort: data.cohort,
          courses: data.courses,
        });
      } catch (error) {
        console.log(error);
        navigate("/", { replace: true });
      }
    };

    fetchId();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateStudent(updatedData));

    const { data, error } = await supabase
      .from("Student")
      .update([
        {
          status: true,
          ...updatedData,
        },
      ])
      .eq("id", id);

    try {
      console.log("data updated!!", data);
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
              value={updatedData.student_name || ""}
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
              value={updatedData.cohort || ""}
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
              value={updatedData.courses || ""}
              onChange={handleChange}
              className="m-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400"
              placeholder="Enter your course(CBSE 9 __)"
            />
          </div>
          <button className=" bg-lime-200 rounded-md shadow-xl m-2 p-2">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
