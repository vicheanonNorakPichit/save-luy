import { HttpMethod } from "@/constants/enums/http-method.enum";
import { AxiosClientServer } from "@/config/axios-client.config";

import { PaginationMetadata, TApiResponse } from "@/types/fetcher.types";
import { kErrorHandler } from "@/utils/fetcher.util";
import { TQueryParam } from "@/libs/search-param/query-param";

export const axiosFetchDefault = async <T>({
  url,
  queryParam,
}: {
  url: string;
  queryParam?: Partial<Record<keyof TQueryParam, string>>;
}): Promise<TApiResponse<T>> => {
  try {
    let URL = url;

    if (queryParam) {
      const params = new URLSearchParams(queryParam);
      URL = url + "?" + params.toString();
    }

    const res: TApiResponse<T> = await AxiosClientServer.get(URL);
    return {
      message: res.message,
      data: res.data as T,
      statusCode: res.statusCode,
      error: null,
      meta: (res?.meta as PaginationMetadata) ?? null,
    };
  } catch (err) {
    return kErrorHandler(err);
  }
};

export const axiosFetchPostDefault = async <T>({
  url,
  body,
  method = HttpMethod.POST,
}: {
  url: string;
  body?: any;
  method?: HttpMethod;
}): Promise<TApiResponse<T>> => {
  try {
    // let res: TApiResponse<T> = null;
    let res: TApiResponse<T>;
    switch (method) {
      case HttpMethod.POST:
        res = await AxiosClientServer.post(url, body);
        break;
      case HttpMethod.DELETE:
        res = await AxiosClientServer.delete(url);
        break;
      case HttpMethod.PATCH:
        res = await AxiosClientServer.patch(url, body);
        break;
      default:
        res = await AxiosClientServer.post(url, body);
        break;
    }
    return {
      message: res.message as string,
      data: res.data as T,
      statusCode: res.statusCode as number,
      error: null,
      meta: (res?.meta as PaginationMetadata) ?? null,
    };
  } catch (err) {
    return kErrorHandler(err);
  }
};
