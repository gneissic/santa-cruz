import React, { useState } from "react";
import { BsCart ,BsChevronUp } from "react-icons/bs";

const publicKey = "pk_test_f90c8a9496c6f08d4667b285446f9f70132989f8";
import { PaystackButton } from "react-paystack";
import TransactionItems from "./TransactionItems";
import { Form, useNavigate } from "react-router-dom";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const PayButton = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const totalAmount =   useSelector((state)=> state.cart.totalAmount)
  let useAmount = totalAmount.toFixed(2)
  let firstAmount =  totalAmount * 120000
  const amount = firstAmount
  // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

const changeNameHandler = (e)=> {
 setName(e.target.value)
}
const changeEmailHandler = (e)=> {
 setEmail(e.target.value)
}
const changePhoneHandler  = (e)=>{
setPhone(e.target.value)
}

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Confirm Payment",
    onSuccess: () =>{alert(`${ name} ,"Thanks for doing business with us! Your Items will be delivered as soon as possible!"`)
    dispatch(cartActions.onClearCart())
      navigate("/")      
},
      
      
    onClose: () => confirm("Are you sure you want to cancel payment?"),
  };
  return (
    <React.Fragment>
      <div>
        <div>
            <h1 className="text-2xl text-black font-pops font-bold capitalize py-[2rem] ml-2">santa cruz bicycles</h1>
        </div>
        <div className="bg-gray-100">
        <div className="flex justify-between px-[1rem] py-[2rem] border-b border-black/30">
        <div className="flex items-center gap-2 font-pops text-black ">
            <BsCart/>
            <p>Hide order summary</p>
            <BsChevronUp/>
        </div>
        <div><p className="font-bold">${useAmount}</p></div>
        </div>
        <TransactionItems/>

        <Form>
            <div className="w-[95%] mx-auto">
                <div>
                    <h1 className="font-pops font-bold text-black text-lg py-3">Contact</h1>
                <Input type="email" placeholder="Email" onChange={changeEmailHandler}  name="mail" />

                </div>
                <div>
                    <h1 className="font-pops font-bold text-black text-lg py-3">Shipping address</h1>
                    <div className="grid gap-[0.7rem]">
                        <Input  type="text" placeholder="Nigeria" name="country"  />
                        <Input  type="text" placeholder="First name (optional)" name="first"/>
                        <Input  type="text" placeholder="Last name" onChange={changeNameHandler}  name="last" />
                        <Input  type="text" placeholder="Address"   name="address" />
                        <Input  type="text" placeholder="Apartment, suite, e.t.c (optional)" name="apartment" />
                        <Input  type="text" placeholder="City"  name="city" />
                        <Input  type="text" placeholder="State"   name="state" />
                        <Input  type="text" placeholder="Zip code" name="zip-code" />
                        <Input  type="number" placeholder="phone" onChange={changePhoneHandler} name="phone" />
                    </div>
                </div>
            </div>
        </Form>
        <PaystackButton  className="bg-black text-white ml-5 w-[90%] my-5  py-3 rounded-md tracking-wide" {...componentProps} />
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default PayButton;
