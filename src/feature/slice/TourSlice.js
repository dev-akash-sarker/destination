import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ValueIn: localStorage.getItem("visitor-user")
    ? JSON.parse(localStorage.getItem("visitor-user"))
    : null,
};

export const userSlice = createSlice({
  name: "Valueshow",
  initialState,
  reducers: {
    valueuser: (state, action) => {
      state.ValueIn = action.payload;
    },
  },
});

export const { valueuser } = userSlice.actions;
export default userSlice.reducer;
