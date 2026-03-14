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