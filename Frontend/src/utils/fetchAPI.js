import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  params: {
    maxResults: 50,
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
};
console.log(`Key : ${import.meta.env.VITE_YOUTUBE_API_KEY}`)
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
