import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  studentData: {
    student_name: "",
    cohort: "",
    courses: "",
  },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      (state.status = true),
        (state.studentData = action.payload || state.studentData);
    },
    updateStudent: (state, action) => {
      const { data } = action.payload;
      state.studentData = data;
    },
  },
});

export const { addStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
