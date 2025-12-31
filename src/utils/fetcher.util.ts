import { TApiResponse, TErrorResponse } from "@/types/fetcher.types";

export const kErrorHandler = (err: TErrorResponse | any): TApiResponse<any> => {
  const error: TErrorResponse = err;
  const errorResponse: TErrorResponse = {
    statusCode: error?.statusCode ?? 500,
    timestamp: error?.timestamp ?? new Date().toISOString(),
    path: error?.path ?? "",
    message: error.message ?? (err?.message || "An unknown error occurred"),
    errorType: error?.errorType || "FetchError",
    validationMessages: error?.validationMessages || [],
  };

  // Handle specific timeout error
  if (err?.code === "UND_ERR_CONNECT_TIMEOUT") {
    errorResponse.message = "Request timed out. Please try again.";
    errorResponse.errorType = "ConnectTimeoutError";
  }

  return {
    message: "error",
    data: null,
    error: errorResponse,
    statusCode: error?.statusCode ?? 500,
    meta: null,
  };
};
