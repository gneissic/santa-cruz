import { Fragment, useState } from "react";

import {
  BsBag,
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsTwitter,
} from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import Bikes from "./Bikes";
import ModalMenu from "./ModalMenu";
import Support from "./Support";
import About from "./About";
import Gear from "./Gear";
import { Link } from "react-router-dom";
import {  motion} from "framer-motion";


const NavModal = (props) => {
  const [bikes, showBikes] = useState(false);
  const [support, showSupport] = useState(false);
  const [about, showAbout] = useState(false);
  const [newGear, showGear] = useState(false);
  const showBikesHandler = () => {
    showBikes(true);
  };
  const showSupportHandler = () => {
    showSupport(true);
  };
  const showGearHandler = () => {
    showGear(true);
  };
  const showAboutHandler = () => {
    showAbout(true);
  };
  return (
    <Fragment>
      <motion.div initial={{opacity: 0}} animate={{opacity:1}}  className="bg-black  fill-white  text-white fixed inset-0 z-40">
        <div className="flex items-center  justify-between mx-[0.5rem] mt-[2rem]">
          <BsPerson className="h-8 w-8" />
          <div className="flex gap-[2rem] items-center mr-[0.5rem]">
            <div>
            <Link to={"cart"}>
            
            <BsBag className="h-6 w-6" />
            
            </Link>


            </div>
            
            <div onClick={props.nav}>
              <MdOutlineCancel className="h-8 w-8" />
            </div>
          </div>
        </div>
        {!bikes && !support && !newGear && !about && (
          <ModalMenu
            showAbout={showAboutHandler}
            showGear={showGearHandler}
            showBikes={showBikesHandler}
            showSupport={showSupportHandler}
          />
        )}
        {bikes && <Bikes />}
        {support && <Support />}
        {newGear && <Gear />}
        {about && <About />}
        <div className="flex justify-around">
          <div className="fixed bottom-0 flex justify-between gap-[4rem]">
            <BsInstagram className="h-6 w-6" />
            <BsFacebook className="h-6 w-6" />

           
            
            <BsTwitter className="h-6 w-6 " />
            
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default NavModal;
