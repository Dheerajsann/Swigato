import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../body/FoodItem";
import { clearCart } from "../../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();


  const clearItems = () => {
    dispatch(clearCart())
  }


  return (
    <div>
      <h1 style={{marginTop: '30px'}}>Cart items : {cartItems.length}</h1>
      {cartItems.map(item => <FoodItem key={item.id} {...item.card.info}/>)}
      <button style={{marginTop: '13px', marginLeft: '13px',display:'flex'}} onClick={() => clearItems()}>clear all items</button>
    </div>
  );
}
{/* <FoodItem {...cartItems[0].card.info} /> */}
  