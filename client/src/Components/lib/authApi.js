// src/api/authApi.js
import axiosInstance from '../lib/axios';

export const loginUser  = async (userData) => {
  const response = await axiosInstance.post('/auth/', userData);
  return response.data; // Adjust based on what your API returns
};
