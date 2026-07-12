import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-investment-research-agent-jx0c.onrender.com",
});

export const researchCompany = async (company) => {
  const response = await API.post("/api/research", {
    company,
  });

  return response.data;
};