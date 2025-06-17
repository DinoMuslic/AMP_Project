import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number | null;
  username: string | null;
  email: string | null;
  password: string | null;
  role: string;
}

const initialState: UserState = {
  id: null,
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
        id: number;
        username: string;
        email: string;
        password: string;
        role: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.password = null;
      state.role = "regular";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
