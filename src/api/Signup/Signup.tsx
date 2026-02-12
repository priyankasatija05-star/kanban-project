import api from "../axiosInstance";

export const signupUser = async (payload:any) => {
  const response = await api.post("/auth/signup", payload);
  return response.data;
};

