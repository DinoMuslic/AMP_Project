import axios from "axios"

export const getAllFlowers = async () => {
  try {
    const response = await axios.get("http://192.168.209.101:3000/api/flowers/all");
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
