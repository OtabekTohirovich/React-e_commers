import axios, { ApiForImg } from "../utils/axios";

// auth
export function signUpRequest(data) {
  return axios.post("/auth/sign-up", data);
}

export function signInRequest(data) {
  return axios.post("/auth/sign-in", data);
}

export function getProducts() {
  return axios.get(`/products/public`);
}

export function getPublicProducts() {
  return axios.get(`/products/public`);
}

export function getProduct(id) {
  return axios.get(`/products/${id}`);
}

export function CreateCart() {
  return axios.post(`/cart/`);
}

export function getUserCart(id) {
  let url = `/cart/${id}`;
  return axios.get(url);
}

export function RemoveCart(id, data) {
  return axios
    .put(`/cart/${id}/remove`, {
      id: id,
      items: data,
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function addProductToCart(id, item) {
  return axios.post(`/cart/${id}/add`, item);
}

export function getAccount() {
  let url = `/auth/profile`;
  return axios.get(url);
}

export function updateProduct(id, query) {
  let url = `/products/${id}/edit`;
  return axios.put(url, query);
}

// products/public

export function getCategorys() {
  return axios.get(`/categories`);
}

export function createNewProduct(quary) {
  let url = `/products/`;
  return axios.post(url, quary);
}

export function GetImg(url) {
  ApiForImg.get(url, {
    headers: {
      'Authentication': `Bearer ${localStorage.getItem("token")}`
    }})
}


export function deleteProduct(id) {
  let url = `/products/${id}/delete`;
  return axios.delete(url);
}