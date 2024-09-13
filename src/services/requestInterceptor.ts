import * as SecureStore from "expo-secure-store";
import { AxiosRequestConfig } from "axios";

export default async function apiclientRequestInterceptor(
  config: any
) {
  const token = await SecureStore.getItemAsync("userToken");
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
}
