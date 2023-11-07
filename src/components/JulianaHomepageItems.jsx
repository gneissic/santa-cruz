import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


const JulianaHomepageItems = (props) => {
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
    <div ref={ref}>
        <Link to={props.id}>
          <motion.div variants={firstVariants} initial="hidden" animate={minControls}>
    <img src={props.img} alt="" />
    <p className="text-2xl text-center font-pops font-bold text-black pt-3">{props.title}</p>
    <button className="border border-slate-200 px-1 py-2  rounded-md w-[60%] ml-[4rem] mt-2">SHOP THE COLLECTION</button>
    </motion.div>
    </Link>
    </div>
  )
}

export default JulianaHomepageItems