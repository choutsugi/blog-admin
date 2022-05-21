import type { AxiosRequestConfig } from "axios";
import axios from "axios";

//创建实例
const request = axios.create({
  baseURL: ".",
  timeout: 5000
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        token
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use(
  (res) => {
    //统一处理接口响应类型，如token过期、服务端异常等
    return res.data;
  },
  (err) => {
    //TODO 处理错误
    return Promise.reject(err.response.data.message);
  }
);

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return res.data.data as T;
  });
};
