import { useContext } from "react";
import CartContext from "../context/cart-context";

const Cart = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <div>Cart</div>
  )
}

export default Cart