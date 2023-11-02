import { useSelector } from "react-redux";
import TransactionCart from "./TransactionCart";


const TransactionItems = () => {
    const totalPrice = useSelector((state)=> state.cart.totalAmount)
    const price = totalPrice.toFixed(2)
    const cartItems = useSelector((state)=> state.cart.cartItems)
  return (
    <div>
     {cartItems.map((cart)=> (<TransactionCart key={cart.id}  quantity={cart.quantity} price={cart.price} title={cart.title}  img={cart.img} />))} 
      <div className="py-5 grid gap-3">
        <div className="flex justify-between px-3 text-md">
          <p>Subtotal</p>
          <p className="text-black font-semibold">${price}</p>
        </div>
        <div className="flex justify-between px-3 text-md">
          <p>Shipping</p>
          <p className="text-sm text-black/85">Free for the next 30 days</p>
        </div>
        <div className="flex justify-between px-3 text-md text-black text-lg font-semibold">
          <p>Total</p>
          <p className="text-lg font-pops font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionItems;
