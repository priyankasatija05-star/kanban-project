import api from "../axiosInstance";

export const loginUser = async (payload:any) => {
  const response = await api.post("/auth/login", payload);
  return response.data;
};