import { createContext, useEffect, useState } from "react";
import {  getCart } from "../api";


const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [data,setData] = useState('');
  const cardId = localStorage.getItem("cardId");
  useEffect(() => {
    getCart(cardId).then(({data}) => {
      setItems(data?.payload?.items);
    });
  }, [data]);
  const addToCart = (items) => {
    setItems(items);
  }; 
  const changeData = (data) => {
    setData(data);
  };
  return (
    <CartContext.Provider value={{ items, addToCart,changeData }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;