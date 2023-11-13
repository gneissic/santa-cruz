import { AnimatePresence, easeIn, motion } from "framer-motion";
import { Fragment, useState, useEffect } from "react";
import { BsCheck, BsGoogle } from "react-icons/bs";
import {
    signInWithPopup,
  } from "firebase/auth";
import { auth, googleProvider } from "../auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";



const SignIn = (props) => {
  const loggedIn  = useSelector((state)=> state.auth.isLoggedIn)
    const [error, setError] = useState(false)
    const [userName, setUserName] = useState("")
    const [img, setImg] = useState("")
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
            const displayName = result.user.displayName
            const photoUrl = result.user.photoURL
            setUserName(displayName)
            setImg(photoUrl)
  
        
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
          <div className=" font-pops bg-white  shadow-md fixed top-[20%] z-50 py-5 px-7 left-[5%] border rounded-md">
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
      <div>
      {loggedIn && <div>
        <div className="w-[60%] mx-auto">
        <img  className="rounded-full" src={img} alt="" />

        </div>
        <div className="flex gap-1 items-center px-4 rounded-md absolute top-52 z-50 left-[5rem] bg-white h-[5rem]">

            <p className="text-sm">{userName} You have successfully signed in</p>
            <div className="h-7 w-7 flex items-center bg-green-900 justify-center rounded-full"><BsCheck/></div>
        </div>
           
        </div>}
      </div>
     
    </Fragment>
  );
};
export default SignIn;
