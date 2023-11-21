import axios from 'axios';
import { API_URL, API_TOKEN } from '@env';

export const axiosInit = () => {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common['x-api-key'] = API_TOKEN;
};
