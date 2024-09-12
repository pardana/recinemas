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

export const getPopularMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/popular");
    return response.data.results; // Mengembalikan hasil film populer
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
