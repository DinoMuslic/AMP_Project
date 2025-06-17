import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const postOrder = async (
  user_id: number,
  full_name: string,
  phone: string,
  address: string,
  total_price: number
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/orders/`, {
      user_id,
      full_name,
      phone,
      address,
      total_price,
    });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
