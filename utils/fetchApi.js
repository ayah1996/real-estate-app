import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  //   const  response  = await axios.get(url, {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "ba0d7fa420msh9351fb3825cd73cp19ba28jsn409fdad2d3fa",
    },
  });
  return data;
};
