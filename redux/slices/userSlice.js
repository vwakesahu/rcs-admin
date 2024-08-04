// userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../intialStates/userInitialState";
import { resetLoginCookie, setLoginCookie } from "@/app/actions";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setLoginCookie(state.user.token);
      console.log(state.user);
    },
    resetUser: (state) => {
      state.user = userInitialState;
      resetLoginCookie();
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export const isLoggedIn = (state) => state.user.authenticated;

export default userSlice.reducer;
