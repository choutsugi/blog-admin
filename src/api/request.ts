import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

//请求拦截器：携带token
service.interceptors.request.use((config: any) => {
  // if (userStore.token) {
  //   config.headers.token = userStore.token;
  // }
  return config;
});

service.interceptors.response.use((response) => {
  const { data, message, status } = response.data;

  if (!status) {
    return Promise.reject(new Error(message || "Error"));
  }
  return data;
});

export default service;
