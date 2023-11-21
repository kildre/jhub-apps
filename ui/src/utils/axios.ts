import axios from 'axios';
import { getJhData } from './jupyterhub';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Authorization: token ${process.env.JUPYERHUB_API_TOKEN}`,
  },
  params: {
    _xsrf: getJhData().xsrf_token,
  },
});

export default instance;
