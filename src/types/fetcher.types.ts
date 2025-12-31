export type TErrorResponse = {
  statusCode: number;
  timestamp: Date;
  path: string;
  message: string;
  errorType: string;
  validationMessages: Array<string>;
};

export type HeadersInit = [string, string][] | Record<string, string> | Headers;

export type PaginationMetadata = {
  totalPages?: number;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  itemCount: number;
};

export type TApiResponse<T> = {
  message: string;
  data: T | null;
  statusCode: number;
  error: TErrorResponse | null;
  meta?: PaginationMetadata | null;
};
