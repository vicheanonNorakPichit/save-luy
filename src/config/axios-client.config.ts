import { TErrorResponse } from "@/types/fetcher.types";
import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders,
} from "axios";

export interface ErrResponseInterface {
  statusCode?: number;
  message: string;
  error?: string;
}

export interface AxiosResponseCustom<T = any, D = any> {
  data: T;
  statusCode: number;
  message: string;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}

const axiosAuthConfiguration: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
  timeout: 60 * 1000 * 60,
};

const AxiosClientServer = Axios.create(axiosAuthConfiguration);

AxiosClientServer.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
);

AxiosClientServer.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data as AxiosResponseCustom);
  },
  async (error: AxiosError) => {
    const apiError = error.response?.data as TErrorResponse;
    return Promise.reject(apiError);
  },
);

export { AxiosClientServer, axiosAuthConfiguration };
