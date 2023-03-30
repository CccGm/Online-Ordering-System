import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseUrl} from '../redux/api';
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {Accept: 'application/json'},
});

axiosInstance.interceptors.request.use(
  async request => {
    const token = await AsyncStorage.getItem('USER_jwtToken');
    console.log(token, 'token');
    if (token) {
      request.headers['Authorization'] = token;
    } else {
      console.log(token, 'token');
      delete request.headers['Authorization'];
    }
    console.log(
      `${new Date()} :: Request`,
      `${JSON.stringify(request, null, 2)}`,
    );
    return request;
  },
  error => {
    console.log(
      `${new Date()} :: Request ERROR`,
      `${JSON.stringify(error, null, 2)}`,
    );
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    console.log('Response:', '---------------------------------------');
    console.log(
      `${new Date()} :: Response:`,
      ` ${new Date()} :: ${JSON.stringify(response, null, 2)}`,
    );
    return response;
  },
  error => {
    console.log(
      `${new Date()} :: Response ERROR`,
      `${JSON.stringify(error, null, 2)}`,
    );
    return Promise.reject(error);
  },
);

export default axiosInstance;
