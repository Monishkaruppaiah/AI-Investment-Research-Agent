import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-investment-research-agent-1-2ztb.onrender.com",
});

export const researchCompany = async (company) => {
  const response = await API.post("/api/research", {
    company,
  });

  return response.data;
};