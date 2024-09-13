import axios from "axios";
import requestInterceptor from "./requestInterceptor"
import responseInterceptor, {apiclientResponseErrorInterceptor} from "./responseInterceptor"

const apiclient = axios.create({
  baseURL: "https://ecart-6apo.onrender.com/api/",
  headers: {
    'Content-Type': 'application/json',
  }
});

apiclient.interceptors.request.use(requestInterceptor);
apiclient.interceptors.response.use(responseInterceptor, apiclientResponseErrorInterceptor);

export default apiclient;
