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
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const emailIsValid = email.includes("@")
  const nameIsValid = name.trim().length > 1
  const phoneIsValid = phone.trim.length > 3
  const lastNameIsValid = lastName.trim().length >1 
  const formIsValid = emailIsValid && nameIsValid && phoneIsValid && lastNameIsValid 

const changeNameHandler = (e)=> {
 setName(e.target.value)
}
const changeLastNameHandler = (e)=> {
 setLastName(e.target.value)
}
const changeEmailHandler = (e)=> {
 setEmail(e.target.value)
}
const changePhoneHandler  = (e)=>{
setPhone(e.target.value)
}
const changeAdressHandler  = (e)=>{
  setAddress(e.target.value)
}
const changeCityHandler = (e)=>{
  setCity(e.target.value)
}
const changeStateHandler = (e)=>{
  setState(e.target.value)
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
      <div className="bg-gray-100">
        <div className="lg:hidden">
            <h1 className="text-2xl text-black font-pops font-bold capitalize py-[2rem] ml-2">santa cruz bicycles</h1>
        </div>
        <div className="bg-gray-100">
        <div className="flex justify-between px-[1rem] py-[2rem] border-b border-black/30 lg:hidden">
        <div className="flex items-center gap-2 font-pops text-black ">
            <BsCart/>
            <p>Hide order summary</p>
            <BsChevronUp/>
        </div>
        <div><p className="font-bold">${useAmount}</p></div>
        </div>
        <div className="lg:flex justify-evenly flex-row-reverse items-center lg:pt-5">
        <TransactionItems/>

<Form>
<div className="hidden lg:block">
            <h1 className="text-2xl text-black font-pops font-bold capitalize py-[2rem] ml-2">santa cruz bicycles</h1>
        </div>
    <div className="w-[95%] lg:w-[40vw] mx-auto">
        <div>
            <h1 className="font-pops font-bold text-black text-lg py-3">Contact</h1>
        <Input type="email" placeholder="Email" onChange={changeEmailHandler}   name="mail" />

        </div>
        <div>
            <h1 className="font-pops font-bold text-black text-lg py-3">Shipping address</h1>
            <div className="grid">
                <Input  type="text" placeholder="Nigeria" name="user-country"  />
                <div className="lg:grid grid-cols-2 lg:gap-5">

                <Input  type="text" placeholder="First name (optional)" value={lastName} onChange={changeLastNameHandler} name="first"/>
                <Input  type="text" placeholder="Last name" onChange={changeNameHandler}  name="last" />
                </div>
                <Input  type="text" placeholder="Address" value={address}   onChange={changeAdressHandler}  name="user-address"  />
                <Input  type="text" placeholder="Apartment, suite, e.t.c (optional)" name="apartment"  />
                <div className="lg:flex gap-3"> 
                <Input  type="text" placeholder="City"  name="city"value={city}  onChange={changeCityHandler} />
                <Input  type="text" placeholder="State" value={state}  name="state" onChange={changeStateHandler} />
                <Input  type="text" placeholder="Zip code" name="zip-code" />
                </div>
                
                <Input  type="number" placeholder="phone" onChange={changePhoneHandler} name="user-phone" />
            </div>
        </div>
    </div>
</Form>
        </div>
        <div className="lg:w-full lg:flex justify-start lg:pl-[3rem]">
          <div>
            {formIsValid &&<button  disabled={!formIsValid} className="disabled:cursor-not-allowed bg-black text-white ml-5 w-[90%]  lg:rounded-sm my-5  py-3 rounded-md tracking-wide">Confirm Payment</button>}
          </div>

       {!formIsValid && <PaystackButton  className="bg-black text-white ml-5 w-[90%] lg:w-[15%] lg:rounded-sm my-5  py-3 rounded-md tracking-wide" {...componentProps} />} 
        </div>
        </div>
        <div>
          <ul className="py-3 flex lg:justify-start lg:ml-[3rem] bg-gray-100 pt-[2rem] text-xs gap-3 justify-evenly font-pops">
            <li className="underline">Refund Policy</li>
            <li className="underline">Privacy Policy</li>
            <li  className="underline">Shipping Policy</li>
            <li  className="underline">Terms Of Service</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PayButton;
