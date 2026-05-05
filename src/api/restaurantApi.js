import axios from "axios";

const BASE_URL = "https://adminapi.jagdaifoods.com/api";



export const getPopularRestaurants = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/popular-restaurant`);
    return res.data.data.data; 
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
};



export const getRestaurantDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/restaurant/${id}`);
    return res.data.data; 
  } catch (error) {
    console.error("Error fetching restaurant details:", error);
    return null;
  }
};

export const getRestaurantFeatures = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/restaurant/${id}`);

    // ✅ Correct path (FIXED)
    const features =
      res?.data?.data?.data?.restaurant?.keyFeatures || [];

    console.log("API FEATURES:", features);

    return features;
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

export const getRestaurantRevenue = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/restaurant/${id}`);

    // ✅ Correct path (FIXED)
    const revenue =
      res?.data?.data?.data?.restaurant?.uniqueRevenue || [];

    console.log("API REVENUE:", revenue);

    return revenue;
  } catch (error) {
    console.error("Error fetching revenue:", error);
    return [];
  }
};