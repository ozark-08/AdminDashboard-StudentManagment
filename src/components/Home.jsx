import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DisplayGrid from "./DisplayGrid";
import supabase from "../config/SupabaseClient";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const { data, error } = await supabase.from("Student").select();
      try {
        if (data == null) setFetchError("No data available.");
        setStudents(data);
        setFetchError(null);
        console.log(data);
      } catch (error) {
        setFetchError("could not fetch the data");
        setStudents(null);
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-6 gap-3 m-5 h-screen">
        <Sidebar />
        <div className=" col-span-5 grid grid-rows-5 gap-3">
          <Navbar />
          <DisplayGrid students={students} error={fetchError} />
        </div>
      </div>
    </>
  );
}

export default Home;
