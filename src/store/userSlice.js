import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(`get current user`, action);
      state.userData = action.payload.userData;
      state.userId = action.payload.userData.userId; // add this line
    },
    clearUser: (state) => {
      state.userData = null;
      state.userId = null; // add this line
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
