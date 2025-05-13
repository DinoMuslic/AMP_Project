import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null,
  email: string | null;
  password: string | null,
  role: string,
}

const initialState: UserState = {
  username: null,
  email: null,
  password: null, 
  role: "regular",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string, email: string, password: string, role: string }>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
