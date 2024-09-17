import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: "id-ID",
  },
});

// Function untuk mendapatkan daftar film populer
export const getPopularMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/popular");
    return response.data.results; // Mengembalikan hasil film populer
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Function untuk mendapatkan daftar film upcoming (yang akan datang)
export const getUpcomingMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/upcoming");
    return response.data.results; // Mengembalikan hasil film upcoming
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
};

// Function untuk mendapatkan daftar film top-rated
export const getTopRatedMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/top_rated");
    return response.data.results; // Mengembalikan hasil film top-rated
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    return [];
  }
};

// Function untuk mendapatkan daftar film now-playing (sedang tayang)
export const getNowPlayingMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/now_playing");
    return response.data.results; // Mengembalikan hasil film now-playing
  } catch (error) {
    console.error("Error fetching now-playing movies:", error);
    return [];
  }
};
