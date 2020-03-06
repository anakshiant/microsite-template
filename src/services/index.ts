import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from '../config.json';
import { ApiResponse } from '../types';

const client: AxiosInstance = axios.create({
  baseURL: config.apiHost,
  headers: {
    ClientHost: config.host,
  },
});

export const normalizeResponse = async <T>(
  request: Promise<AxiosResponse<ApiResponse<T>>>,
): Promise<ApiResponse<T>> => {
  try {
    const response = await request;
    if (response.status !== 200) {
      return response.data;
    } else {
      throw new Error('Some error occured');
    }
  } catch {
    throw new Error('Some error occured');
  }
};

export default client;
