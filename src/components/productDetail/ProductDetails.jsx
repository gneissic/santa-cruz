import { Fragment, useEffect, useState } from "react";
import CollectionsNav from "../Nav/CollectionsNav";
import { BsArrowLeft, BsStar, BsTruck } from "react-icons/bs";
import { Form, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";



const ProductDetails = ({ data }) => {
  const [bump, setBump] = useState(false)
  const price = data.price.toFixed(2);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    localStorage.setItem("hasCart", "true")
    dispatch(
      cartActions.addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        img: data.img,
        totalPrice: data.price,
      })
    );
    
    setBump(true)
  };
  useEffect(() => {
   const timer =   setTimeout(() => {
      if (bump) {
        setBump(false)
      }
     }, 200); 

    return () => {
      clearTimeout(timer)
    }
  }, [bump])
  const noBump = " w-full lg:w-[37rem]  py-4 font-pops border-[2px] border-slate-700"
  const bumpButn  = "transform scale-105 transition-transform duration-300 w-full lg:w-[37rem]  py-4 font-pops border-[2px] border-slate-700"
  return (
    <Fragment>
      <div className="lg:flex justify-center lg:gap-[5rem] items-center lg:pt-[5rem]">
        <div>
          <img
            className="grid place-items-center h-[27rem]  lg:h-[30rem] lg:w-[30rem] "
            src={data.img}
            alt=""
          />
        </div>
        <div className="lg:grid lg:gap-2">
          <CollectionsNav
            page="collections"
            child={`shop ${data.title} small parts`}
          />
          <div className="pt-2 lg:pt-0">
            <h1 className="text-center lg:text-start text-3xl font-pops lg:text-3xl font-bold text-black">
              {data.title}
            </h1>
          </div>
          <p className="text-center lg:text-start pt-3 text-lg  font-pops text-black/80 font-bold ">
            ${price}
          </p>
          <p className="text-center lg:text-start font-pops text-sm text-black/80 tracking-wider font-semibold">
            shipping calculated at checkout
          </p>
          <div className="flex mt-[2.5rem] items-center lg:justify-start  gap-3 justify-center text-md font-pops font-semibold text-black/95">
            <BsTruck className="text-black/80 h-6 w-6" />
            <p className="capitalize">free shipping on orders over $50</p>
          </div>
          <div className="flex pt-3 items-center justify-center lg:justify-start gap-4 tracking-wide text-md font-pops font-semibold text-black/95">
            <div className="border rounded-full h-4 w-4 bg-green-500"></div>
            <p>In store, ready to ship</p>
          </div>
          <div className="w-[95%] mx-auto mt-[2rem] grid gap-5 pb-5">
            <button
              onClick={addToCartHandler}
              className={` ${bump ? bumpButn : noBump }`}
            >
              ADD TO CART
            </button>
            <Link to={"/checkout"}>
              <button
                onClick={addToCartHandler}
                className="w-full  lg:w-[37rem] text-white bg-black font-nun py-4"
              >
                BUY IT NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:pt-[5rem]">
        <img
          className="w-[92%] lg:w-[40%] mx-auto"
          src="https://shop.santacruzbicycles.com/cdn/shop/files/Capture_750x.png?v=1668017537"
          alt=""
        />
        <div className="lg:w-[50%]">
        <p className="w-[87%] mx-auto pt-[2rem] text-md font-lato font-light">
          We make quality bicycles that are built to last. We make them easy to
          service without specialist tools or specialist skills. So easy that
          even members of our marketing team can do it with one eye closed (if
          we hide the sharp tools from them). Just be sure to reference all of
          the correct torque values for your specific model on our archive
          pages.
        </p>
        <p className="pt-[1rem] w-[87%] mx-auto font-light font-lato">
          However, if you {" don't"} know which end of a hammer to hold then{" "}
          {"we'd "} suggest having your local Santa Cruz Dealer lend you a
          helping hand.
        </p>
        </div>
       
      </div>
      <div className="bg-black text-white w-full lg:w-[40%] lg:mx-auto flex items-center justify-center gap-[1rem] py-7 mb-2 mt-[2rem] lg:mt-[4rem]">
        <BsArrowLeft className="h-6 w-6" />
        <p>Back To Shop Small Parts</p>
      </div>
      <div className="w-[90%] mx-auto">
        <h1 className="capitalize text-2xl font-pops py-5 font-semibold">
          customer reviews
        </h1>
        <div className="flex justify-between">
          <div className="bg-black text-white py-5 border rounded-md w-[5rem] grid place-items-center ">
            <BsStar className="w-10 h-10 " />
          </div>
          <div className="grid gap-2 ">
            <p className="bg-black text-white py-3 px-4 rounded-sm border lg:cursor-pointer lg:rounded-md border-black tracking-wide">
              Write A Review
            </p>
            <p className="underline">Ask A Question</p>
          </div>
        </div>
        <div className="mt-[1rem]">
          <p className="text-lg tracking-wide font-pops font-bold">
            Review this product
          </p>
          <p className="pops text-black">
            share your thoughts with other customers
          </p>
        </div>
        <Form>
          <h1 className="text-2xl font-bold pt-5 font-pops tracking-wide">
            Write A Review
          </h1>
          <div className="py-2">
            <h1 className="py-2 font-bold font-pops ">Feedback</h1>
            <textarea
              className="border border-slate-500 rounded-sm lg:rounded-md"
              name="feedback"
              cols="70"
              rows="5"
            ></textarea>
          </div>
          <div>
            <h1 className="py-2 font-bold font-pops ">Name</h1>
            <input
              className="w-full border border-gray-500 py-2 lg:py-3 pl-2 font-semibold"
              type="text"
              name="usename"
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-3">
            <p className="py-2 font-bold font-pops ">Email</p>
            <input
              className="w-full border border-gray-500 py-2  lg:py-3 pl-2 font-semibold"
              type="text"
              placeholder="Enter your mail"
              name="mail"
            />
          </div>
          <div className="mt-[2rem] grid gap-3 pb-5 lg:flex lg:justify-start">
            <button className="w-full lg:w-[25%] bg-black py-3 rounded-md lg:rounded-sm font-pops text-white font-semibold">
              Submit Review
            </button>
            <button className="w-full lg:w-[20%] lg:rounded-sm  py-2  border-[2px] border-slate-700 text-black font-bold font-pops">
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
