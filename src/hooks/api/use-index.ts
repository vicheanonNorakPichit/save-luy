"use client";
import { UriPathEnum } from "@/constants/enums/uri-path.enum";
import { axiosFetchDefault } from "@/services/fetch-service/axios-fetcher.service";
import useSWR from "swr";

export default function useIndex() {
  const { data, isLoading, mutate, isValidating } = useSWR(UriPathEnum.INDEX, {
    fetcher: (url) => axiosFetchDefault({ url }),
  });

  return {
    data,
    isLoading,
    mutate,
    isValidating,
  };
}
