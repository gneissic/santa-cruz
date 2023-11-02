import { Fragment } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  const subTotal = totalAmount.toFixed(2)

  return (
    <Fragment>
      
      <div className="text-center pt-[2rem]">
        <h1 className="text-4xl font-pops font-bold">Cart</h1>
        {cart.length === 0 ? <p className="font-pops text-black">Your Cart is currently empty</p> : ""}
        <Link to="/">
          <p className=" py-3 underline text-md text-black tracking-wide">
            Continue Shipping
          </p>
        </Link>
      </div>
      <div>

      
      {cart.map((newCart) => (
        <CartItems
          id={newCart.id}
          key={newCart.id}
          title={newCart.title}
          totalPrice={newCart.totalPrice}
          price= {newCart.price}
          img={newCart.img}
          quantity= {newCart.quantity}
        />
      ))}
      </div>
     {cart.length > 0 ? <div>
        <div className="flex justify-between px-5 font pops text-lg tracking-wide">
          <p>Subtotal</p>
          <p className="font-bold">${subTotal}</p>
        </div>
        <Link to="/checkout"><button className="text-white font-semibold bg-black w-[95%] ml-[0.5rem] my-5 py-2">Check Out</button></Link>
        <p className="text-sm fofnt-pops text-center font-bold">Shipping, taxes, and discount codes calculated at checkout.</p>
      </div> : "" } 
    </Fragment>
  );
};
export default Cart;
