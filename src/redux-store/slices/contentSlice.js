import { createSlice } from "@reduxjs/toolkit";
import content from "../../shared/data";

const initialState = content;

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});

// Action creators for each reducer method
// export const {} = contentSlice.actions;

export default contentSlice.reducer;
