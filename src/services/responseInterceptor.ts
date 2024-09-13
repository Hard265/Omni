import { AxiosError, AxiosResponse } from "axios";
import useAuth from "@/hooks/useAuth";

export default function apiclientResponseInterceptor(response: AxiosResponse) {
  return response;
}

export function apiclientResponseErrorInterceptor(error: AxiosError) {
  const { signOut } = useAuth();
  const path = error.response?.config.url;
  if (error.response?.status === 401 && !path?.split("/").includes("auth")) {
    signOut();
  }
  return Promise.reject(error);
}
