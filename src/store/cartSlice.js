import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item !== action.payload);
    }
  }
});
export const { add, remove } = cartSlicer.actions;
export default cartSlicer.reducer;
