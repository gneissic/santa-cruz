import { Fragment, useEffect, useState } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { BsBag } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavItems = () => {
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
      <div className={`${isFixed ? "fixed z-40 inset-0  bg-white h-[5rem]" : "static"}`}>
      <div className="flex items-center justify-between pt-5 px-2 bg-white">
        <div>
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
          <TbMenu className="w-7 h-7 text-slate-700" />
        </div>
      </div>
      </div>
      
    </Fragment>
  );
};

export default NavItems;
