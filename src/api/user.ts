/*
 * 公共基础接口
 * */

import request from '@/utils/request';
import type { ILoginResponse } from '@/api/types/user';

// interface ResponseData<T = any> {
//   status: number;
//   msg: string;
//   data: T;
// }

//获取登录信息
export const getUserInfo = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/admin/login/info', // 通过代理请求
  });
};
