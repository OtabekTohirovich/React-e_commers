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

export function getProduct(id) {
  return axios.get(`/products/${id}`);
}

export function CreateCart() {
  return axios.post(`/cart/`)
}

export function getCart(id) {
  return axios.get(`/cart/${id}`);
}

export function RemoveCart(id, data) {
  return axios
    .put(`/cart/${id}/remove`, {
      id:id,
      items:data
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function addProductToCart(id, item) {
  return axios.post(`/cart/${id}/add`, item);
}


// products/public