import { QueryParamEnum } from "./query-param.constant";

export type TQueryParam = {
  [K in QueryParamEnum]: string;
};
