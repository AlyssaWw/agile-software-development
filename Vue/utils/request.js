import axios from 'axios';
import {getAccessToken} from '/utils/auth';

const service = axios.create({
  baseURL: 'http://localhost:28080/admin-api/',
  timeout: 5000
});

service.interceptors.request.use(


// 在请求发送之前对请求数据进行处理
    // ...
    
  config => {
    // 在请求发送之前对请求数据进行处理
    // ...
    if (getAccessToken() ) {
      config.headers['Authorization'] = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    // ...

    return response.data;
  },
  error => {
    // 对响应错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;