import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const loginService = async (
  username_email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, {
      username_email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const registerService = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return "Server error occured";
  }
};
