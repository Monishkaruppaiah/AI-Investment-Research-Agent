import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const researchCompany = async (company) => {
  const response = await API.post("/api/research", {
    company,
  });

  return response.data;
};