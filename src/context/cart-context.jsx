import { createContext, useEffect, useState } from "react";
import {  getUserCart } from "../api";


const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [data,setData] = useState('');
  const cardId = JSON.parse(localStorage.getItem("userId"))
  useEffect(() => {
    getUserCart(cardId).then(({data}) => {
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