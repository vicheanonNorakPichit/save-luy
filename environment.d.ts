declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_API_ROUTE: string;
      NEXT_PUBLIC_GEN_API_URL: string;
      MPTC_POC_JWT_ACCESS_TOKEN_EXPIRATION: number;
      MPTC_POC_JWT_REFRESH_TOKEN_EXPIRATION: number;
      NEXT_PUBLIC_ENV_MODE: "development" | "staging" | "production";

      npm_config_user_agent: string;
    }
  }
}

export {};
