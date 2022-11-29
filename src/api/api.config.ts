import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export const parseImagePath = (path: string | null | undefined) => {
  if (path) return `https://image.tmdb.org/t/p/original/${path}`;
  return "";
};
