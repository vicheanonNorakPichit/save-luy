import { BASE_URI_PATH } from "@/constants/app.constant";
import { RevalidateTagEnum } from "@/constants/enums/fetch.enum";
import { HttpMethod } from "@/constants/enums/http-method.enum";
import { UriPathEnum } from "@/constants/enums/uri-path.enum";

import {
  PaginationMetadata,
  TApiResponse,
  TErrorResponse,
  HeadersInit,
} from "@/types/fetcher.types";
import { kErrorHandler } from "@/utils/fetcher.util";

const _buildUriPath = (url: string, id?: string) => {
  let newUrl: string = url;
  if (id && id !== null) {
    newUrl = newUrl.concat(`/${id}`);
  }

  return BASE_URI_PATH + newUrl;
};

export const fetchDefault = async <T>({
  url,
  id,
  tags,
  headers,
}: {
  url: UriPathEnum;
  id?: string;
  tags?: Array<RevalidateTagEnum>;
  headers?: HeadersInit;
}): Promise<TApiResponse<T>> => {
  try {
    const res = await fetch(_buildUriPath(url, id), {
      method: HttpMethod.GET,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      next: {
        tags: tags,
      },
    });
    const response = await res.json();

    if (res.ok) {
      return {
        message: response.message as string,
        data: response.data as T,
        statusCode: response.statusCode as number,
        error: null,
        meta: (response.meta as PaginationMetadata) ?? null,
      };
    }
    throw response;
  } catch (err) {
    const error = err as TErrorResponse;

    return kErrorHandler(error);
  }
};

export const fetchPostDefault = async <T>({
  url,
  body,
  headers,
  id,
  method = HttpMethod.POST,
}: {
  url: UriPathEnum;
  body?: any;
  id?: string;
  headers?: HeadersInit;
  method?: HttpMethod;
}): Promise<TApiResponse<T>> => {
  try {
    const res = await fetch(_buildUriPath(url, id), {
      method: method,
      body: body && body !== null && JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    const response = await res.json();
    if (res.ok) {
      return {
        message: response.message as string,
        data: response.data as T,
        statusCode: response.statusCode as number,
        error: null,
        meta: (response?.meta as PaginationMetadata) ?? null,
      };
    }

    throw response;
  } catch (err) {
    const error = err as TErrorResponse;

    return kErrorHandler(error);
  }
};
