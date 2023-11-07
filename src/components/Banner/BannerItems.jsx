import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
const BannerItems = (props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const minControls = useAnimation()

  const bannarVariants = {
    hidden: { y: 75,  opacity: 0 , },
    visible: { y:0 , opacity: 1, transition:{duration:0.5, delay:0.5} },
  }
  useEffect(() => {
    if (isInView) {
      minControls.start("visible")
    }
  
  }, [isInView, minControls])
  
  
  return (  
<div ref={ref}  >
<motion.div initial="hidden" animate={minControls}  variants={bannarVariants}>
   <Link to={props.id}>  <img src={props.img} className="w-[93%] mx-auto" alt="" /> </Link>
    </motion.div>
</div>
   
  )
}

export default BannerItems