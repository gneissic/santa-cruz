import {Link  } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


const BikeModalItems = (props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const minControls = useAnimation()

  const firstVariants = {
    hidden: { y: 75,  opacity: 0 , },
    visible: { y:0 , opacity: 1, transition:{duration:0.5, delay:0.5} },
  }
  useEffect(() => {
    if (isInView) {
      minControls.start("visible")
    }
  
  }, [isInView, minControls])
  return (
  <Link to={props.id}>
    <div ref={ref}>

    
    <motion.div  variants={firstVariants} initial="hidden" animate={minControls} className="text-center font-pops text-2xl tracking-wide text-black font-bold ">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        </motion.div>
    </div></Link>
  )
}

export default BikeModalItems