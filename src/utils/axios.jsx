import Axios from "axios";
const baseURL = "https://shopzone.onrender.com"

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