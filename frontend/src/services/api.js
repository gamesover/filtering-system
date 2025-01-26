import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";

export const fetchImpactCards = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await axios.get(
    `${API_BASE_URL}/impact_cards?${params}`
  );
  return response.data;
};
