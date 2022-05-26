import request from "@/api/request";

export const login = (data: { username: string; password: string }) => {
  return request({
    url: "login",
    method: "POST",
    data,
  });
};
