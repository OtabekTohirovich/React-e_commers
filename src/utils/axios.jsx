import Axios from "axios";
const baseURL = "https://shopzone.onrender.com"
const baseImgURL = ""
const axios = Axios.create({
  baseURL,
});

const ApiForImg = Axios.create({
  baseImgURL,
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

export { ApiForImg, axios as default };