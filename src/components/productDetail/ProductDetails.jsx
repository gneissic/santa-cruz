import { Fragment } from "react";
import NavItems from "../Nav/NavItems";
import FreeShipping from "../Nav/FreeShipping";
import CollectionsNav from "../Nav/CollectionsNav";
import { BsArrowLeft, BsStar, BsTruck } from "react-icons/bs";
import { Form } from "react-router-dom";

const ProductDetails = ({ data }) => {
  const price = data.price.toFixed(2)
  return (
    <Fragment>
      <NavItems />
      <FreeShipping />

      <div>
        <img
          className="grid place-items-center h-[27rem]"
          src={data.img}
          alt=""
        />
      </div>
      <CollectionsNav page="collections" child={`shop ${data.title} small parts`} />
      <div className="pt-2">
        <h1 className="text-center text-3xl font-posp font-bold text-black">
          {data.title}
        </h1>
      </div>
      <p className="text-center pt-3 text-lg font-pops text-black/80 font-bold ">
        ${price}
      </p>
      <p className="text-center font-pops text-sm text-black/80 tracking-wider font-semibold">
        shipping calculated at checkout
      </p>
      <div className="flex mt-[2.5rem] items-center gap-3 justify-center text-md font-pops font-semibold text-black/95">
        <BsTruck className="text-black/80 h-6 w-6" />
        <p className="capitalize">free shipping on orders over $50</p>
      </div>
      <div className="flex pt-3 items-center justify-center gap-4 tracking-wide text-md font-pops font-semibold text-black/95">
        <div className="border rounded-full h-4 w-4 bg-green-500"></div>
        <p>In store, ready to ship</p>
      </div>
      <div className="w-[95%] mx-auto mt-[2rem] grid gap-5 pb-5">
        <button className="w-full  py-4 font-pops border-[2px] border-slate-700">
          ADD TO CART
        </button>
        <button className="w-full text-white bg-black font-nun py-4">
          BUY IT NOW
        </button>
      </div>
      <div>
        <img
          className="w-[92%] mx-auto"
          src="https://shop.santacruzbicycles.com/cdn/shop/files/Capture_750x.png?v=1668017537"
          alt=""
        />
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
      <div className="bg-black text-white w-full flex items-center justify-center gap-[1rem] py-7 mb-2 mt-[2rem]">
        <BsArrowLeft className="h-6 w-6" />
        <p>Back To Shop Small Parts</p>
      </div>
      <div className="w-[90%] mx-auto">
        <h1 className="capitalize text-2xl font-pops py-5 font-semibold">customer reviews</h1>
        <div className="flex justify-between">
          <div className="bg-black text-white py-5 border rounded-md w-[5rem] grid place-items-center ">
            <BsStar className="w-10 h-10 " />
          </div>
          <div className="grid gap-2 ">
            <p className="bg-black text-white py-3 px-4 rounded-sm border border-black tracking-wide">Write A Review</p>
            <p className="underline">Ask A Question</p>
          </div>
        </div>
        <div className="mt-[1rem]">
          <p className="text-lg tracking-wide font-pops font-bold">Review this product</p>
          <p className="pops text-black">share your thoughts with oyher customers</p>
        </div>
        <Form>
          <h1 className="text-2xl font-bold pt-5 font-pops tracking-wide">Write A Review</h1>
          <div className="py-2">
            <h1 className="py-2 font-bold font-pops ">Feedback</h1>
            <textarea className="border border-slate-500 rounded-sm" name="feedback" cols="40" rows="5"></textarea>
          </div>
          <div>
            <h1 className="py-2 font-bold font-pops ">Name</h1>
            <input  className="w-full border border-gray-500 py-2 pl-2 font-semibold" type="text" name="usename"  placeholder="Enter your name"/>
          </div>
          <div className="pt-3">
            <p className="py-2 font-bold font-pops ">Email</p>
            <input  className="w-full border border-gray-500 py-2 pl-2 font-semibold" type="text" placeholder="Enter your mail" name="mail" />
          </div>
          <div className="mt-[2rem] grid gap-3 pb-5">
          <button className="w-full bg-black py-3 rounded-md font-pops text-white font-semibold">Submit Review</button>
          <button className="w-full  py-2  border-[2px] border-slate-700 text-black font-bold font-pops">Cancel</button>

          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
