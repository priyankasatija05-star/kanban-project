import api from "../axiosInstance";

export const generateTask = async (payload:any) => {
  const response = await api.post("/api/tasks/create", payload);
  return response.data;
};