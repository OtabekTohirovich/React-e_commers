import React from "react";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [items, setItems] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    getProducts().then((data) => {
      setItems(data?.data?.data);
    });
  }, [data]);
  const changeData = (data) => {
    setData(data);
  };
  return (
    <ProductContext.Provider value={{ items, changeData }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
