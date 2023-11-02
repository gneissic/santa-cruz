import { Fragment } from "react";
import {  } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItems = (props) => {

  const dispatch = useDispatch()
  const id = props.id
  const price = props.price.toFixed(2)
  const addToCartHandler=()=>{
    dispatch(cartActions.addToCart({
        id: props.id,
        title:props.title,
        img:props.img,
        price:props.price,
        quantity: props.quantity
    }))
  }
  const removeFromCartHandler = ()=>{
    dispatch(cartActions.removeFromCart(id))
  }

  return (
    <Fragment>
      <div className="flex gap-[1rem] w-[95%] mx-auto mt-[3rem] pl-[1rem] text-lg font-pops font-bold">
        <div>
          <img src={props.img} className="w-[10rem] h-[8rem]" alt="" />
        </div>
        <div className="grid gap-3">
            <p className="font-semibold text-black/95 py-5">{props.title}</p>
            <div className="flex gap-6">
                <div className=" text-lg font-pops font-bold flex border border-gray-300 shadow justify-center items-center gap-5 py-1 px-5 ">
                <p onClick={removeFromCartHandler}>-</p>
                <p>{props.quantity}</p>
                <p onClick={addToCartHandler}>+</p>
                </div>
               <div>
                <p >${price}</p>
               </div>
            </div>
            <p>Remove</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItems;
