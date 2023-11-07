import { Fragment, useState } from "react";

import {
  BsBag,
  BsChevronLeft,
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
import {  AnimatePresence, easeIn, easeInOut, motion} from "framer-motion";


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
  const allFalseHandler = ()=>{
    showBikes(false)
    showSupport(false)
    showAbout(false)
    showGear(false)
  }
  const containerVariants = {
    hidden: {  opacity: 0 ,  transition:{duration:0.3}, ease:easeInOut},
    visible: {  opacity: 1, transition:{duration:0.3, ease:easeIn} },
  }
  const childVariants =  {
    hidden: {  opacity: 0 , x: "-100vw",   transition:{duration:0.3},},
    visible: {  opacity: 1, x:1, transition:{duration:1,} },
  }
  const checkAll = bikes || support || newGear || about
  
  return (
    <Fragment>
        <AnimatePresence>
      {props.modal && <motion.div variants={containerVariants}   initial="hidden" animate="visible" exit="hidden" className="bg-black  fill-white  text-white fixed inset-0 z-40">
        <div className="flex items-center  justify-between mx-[0.5rem] mt-[2rem]">
            <div className="flex gap-4 items-center">
                    <AnimatePresence>
                <motion.div variants={childVariants}  initial="hidden" animate="visible" exit="hidden">
            { checkAll &&  <BsChevronLeft  onClick={allFalseHandler} className="h-8 w-8" />}
                </motion.div>
            </AnimatePresence>
          <BsPerson className="h-8 w-8" /> 
            </div>
           
          <div className="flex gap-[2rem] items-center mr-[0.5rem]">
            <div>
            <Link to={"/cart"}>
            
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
        <div>
        {bikes && <Bikes />}
        {support && <Support />}
        {newGear && <Gear />}
        {about && <About />}
        </div>
       
        <div className="flex justify-around">
          <div className="fixed bottom-4 flex justify-between gap-[4rem]">
            <BsInstagram className="h-6 w-6" />
            <BsFacebook className="h-6 w-6" />

           
            
            <BsTwitter className="h-6 w-6 " />
            
          </div>
        </div>
      </motion.div>}
      </AnimatePresence>
    </Fragment>
  );
};

export default NavModal;
