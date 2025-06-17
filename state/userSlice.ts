import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user_id: number | null;
  username: string | null;
  email: string | null;
  password: string | null;
  role: string;
}

const initialState: UserState = {
  user_id: null,
  username: null,
  email: null,
  password: null,
  role: "regular",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        role: string;
      }>
    ) => {
      state.user_id = action.payload.user_id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.user_id = null;
      state.username = null;
      state.email = null;
      state.password = null;
      state.role = "regular";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
