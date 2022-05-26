import axios from "axios";
import { useAuthStore } from "@/store/modules/auth";

const authStore = useAuthStore();

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

//请求拦截器：携带token
service.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `"Bearer ${authStore.token}"`;
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data, message, status } = response.data;
    if (!status) {
      window.$message.error(message);
      return Promise.reject(new Error(message || "服务器错误"));
    }
    return data;
  },
  (error) => {
    error.response && window.$message.error(error.response.message || error.message);
    return Promise.reject(new Error(error.response.data));
  }
);

export default service;
