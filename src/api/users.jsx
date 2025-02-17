import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const getUsers = (page) => apiClient.get(`?page=${page}&results=5`);
