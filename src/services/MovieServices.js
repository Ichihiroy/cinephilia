import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const getAllMovies = async () => {
  try {
    const res = await axios.get(`${API_URL}/movies`);
    return res.data;
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

const getAllTheatres = async () => {
  try {
    const res = await axios.get(`${API_URL}/theatre`);
    return res.data;
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

export { getAllMovies, getAllTheatres };
