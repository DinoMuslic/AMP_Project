import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

type User = {
  id: number;
  username: string;
  email: string;
  role: string;
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/all`);
    const users = response.data;
    const sanitizedUsers = (users as User[]).map(({ id, ...rest }) => rest);
    return sanitizedUsers;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};
