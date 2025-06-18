import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

type Flower = {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
};

export const getAllFlowers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/flowers/all`);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getAllFlowersRemovedProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/flowers/all`);
    const flowers = response.data;

    const sanitizedFlowers = (flowers as Flower[]).map(
      ({ id, description, image, ...rest }) => rest
    );
    return sanitizedFlowers;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};
