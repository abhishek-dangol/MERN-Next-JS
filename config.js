import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "https://dan-mern-next-blog.com"
  : "http://localhost:8000/api";

export const APP_NAME = publicRuntimeConfig.APP_NAME;
