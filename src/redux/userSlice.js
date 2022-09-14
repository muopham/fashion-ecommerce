import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // email: "admin@gmail.com",
    // name: "admin",
    // password: "admin1234@2k",
  },

  reducers: {
    updateUser: (state, action) => {
      return (state = {
        ...state,
        password: action.payload,
      });
    },

    register: (state, action) => {
      const newUser = action.payload;
      return (state = newUser);
    },
  },
});

export const { register, updateUser } = userSlice.actions;
export default userSlice.reducer;
