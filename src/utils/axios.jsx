import Axios from "axios";
const baseURL = "http://localhost:9999"

const axios = Axios.create({
  baseURL,
});
axios.interceptors.request.use(
  function (config) {
    config.headers.authorization = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;