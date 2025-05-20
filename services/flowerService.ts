import axios from "axios"

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const getAllFlowers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/flowers/all`);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
