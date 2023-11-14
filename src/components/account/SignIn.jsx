import { AnimatePresence, easeIn, motion } from "framer-motion";
import { Fragment, useState, useEffect } from "react";
import {  BsGoogle } from "react-icons/bs";
import {
    signInWithPopup,
  } from "firebase/auth";
import { auth, googleProvider } from "../auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";



const SignIn = (props) => {
  const loggedIn  = useSelector((state)=> state.auth.isLoggedIn)
    const [error, setError] = useState(false)
    
    const dispatch = useDispatch()
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition:{ease:easeIn, delay:0.1, duration: 0.1}}
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log(result.user);
            dispatch(authActions.handleLogin())
            
        
          })
          .catch((err) => {
            setError(err.message);
          })
          
      };
      useEffect(() => {
     const timer  =   setTimeout(() => {
          dispatch(authActions.handleLogout())
        }, 5000);
      
        return () => {
          clearTimeout(timer)
        }
      }, [dispatch])
      
      

  return (
    <Fragment>
      <div>
      {props.showGoogle && !loggedIn && (
            <AnimatePresence>
        <motion.div variants={containerVariants}  initial="hidden" animate="visible" exit="hidden">
          <div
            onClick={props.hideGoogle}
            className="fixed bg-black/60 inset-0 z-40"
          ></div>
          <div className=" font-pops bg-white lg:w-[50%] lg:left-[24%]  shadow-md fixed top-[20%] z-50 py-5 px-7 left-[10%] border rounded-md">
            <h1 className="text-center text-2xl">Sign in</h1>
            <div onClick={handleGoogleLogin} className=" cursor-pointer flex items-center gap-3 p-3 shadow border-black/60 rounded-md border mt-[2rem]">
              <p className="text-black text-lg">Continue with google</p>
              <BsGoogle className="text-red-400 h-7 w-7" />
            </div>
            {error && <p>{error}</p>}
          </div>
        </motion.div>
          </AnimatePresence>
      )}
      </div>
     
    </Fragment>
  );
};
export default SignIn;
