import { Fragment, useEffect, useState } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { BsBag, BsPerson } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  const cartNumber = useSelector((state)=> state.cart.cartNumber)
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div className="hidden  bg-black text-white lg:flex justify-around font-pops items-center py-2 text-xl">
        <div className="flex gap-[2rem] items-center">

        <p className="cursor-pointer font-ken text-amber-500 tracking-widest font-semibold">JULIANA</p>
        <p className="cursor-pointer tracking-widest border-y border-red-500">RESERVE</p>
        </div>
        <div className="flex  gap-[4rem] items-center">
          <p className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear">Bike Registration</p>
          <p className="cursor-pointer  hover:text-red-500 transition-all duration-150 ease-linear">Find a Dealer</p>

          <p onClick={props.showGoogle} className="cursor-pointer hover:border hover:bg-white hover:text-black transition-all duration-150 ease-in p-2 rounded-full"><BsPerson className="w-8 h-8" /></p>
          <Link to={"/cart"}>
          <p className="cursor-pointer hover:border hover:bg-white hover:text-black transition-all duration-150 ease-in p-2 rounded-full"><BsBag className="w-7 h-7"/></p>
          </Link>
        </div>
      </div>
      <div className={`${isFixed ? "fixed z-30 inset-0  bg-white h-[5rem] " : "static"}`}>
        <div className="hidden lg:block text-lg font-pops font-semibold py-5">
          <ul className="flex items-center justify-evenly cursor-pointer">
            <li className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear" onMouseEnter={props.onMouseEnter}  onMouseLeave={props.onMouseLeave}>Bikes</li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear">Support</li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear"> <img src={Logo} alt="" className="w-[12em] h-[3rem]" /></li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear">ABout</li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear">Gear</li>
          </ul>
        </div>
      <div className="lg:hidden flex items-center justify-between pt-5 px-2 bg-white">
        <div onClick={props.showGoogle}>
          <MdOutlineManageAccounts className="w-10 h-10 text-slate-700" />
        </div>
        <div>
          <img src={Logo} alt="" className="w-[12em] h-[3rem]" />
        </div>
        <div className="flex gap-[1.5rem]">
    
          <Link to="/cart">
          <div className="relative">
          <BsBag className="w-7 h-7   text-slate-700" />
          <p className="  absolute -top-4 -right-3 grid place-items-center bg-red-900 text-white h-7 w-7 border border-red-900 rounded-full">{cartNumber}</p>
          </div>
          </Link>
          <div onClick={props.nav}>

          <TbMenu className="w-7 h-7 text-slate-700" />
          </div>
        </div>
      </div>
      </div>
      
    </Fragment>
  )
}

export default NavItems;
