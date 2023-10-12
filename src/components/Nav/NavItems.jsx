import { Fragment } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { BsBag } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";

const NavItems = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between pt-5 px-2 bg-white">
        <div>
          <MdOutlineManageAccounts className="w-10 h-10 text-slate-700" />
        </div>
        <div>
          <img src={Logo} alt="" className="w-[12em] h-[3rem]" />
        </div>
        <div className="flex gap-[1.5rem]">
          <BsBag className="w-7 h-7   text-slate-700" />
          <TbMenu className="w-7 h-7 text-slate-700" />
        </div>
      </div>
    </Fragment>
  );
};

export default NavItems;
