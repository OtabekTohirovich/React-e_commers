import axios from "../utils/axios";

// auth
export function signUpRequest(data) {
  return axios.post("/auth/sign-up", data);
}

export function signInRequest(data) {
  return axios.post("/auth/sign-in", data);
}

export function getProducts(page = 1) {
  return axios.get(`/products?page=${page}`);
}

export function getPublicProducts() {
  return axios.get(`/products/public`);
}


// products/public