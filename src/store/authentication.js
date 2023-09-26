import { createSlice } from "@reduxjs/toolkit";

const initialData = () => {
  const user = window.localStorage.getItem("userData");

  return user ? JSON.parse(user) : {};
};
const authSlice = createSlice({
  name: "authenticate",
  initialState: {
    userData: initialData()
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    handleLogout: (state) => {
      state.userData = {};
      localStorage.removeItem("userData");
    }
  }
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
