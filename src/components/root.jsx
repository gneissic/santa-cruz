import { Fragment, useState,  } from "react"
import NavItems from "./Nav/NavItems"
import FreeShipping from "./Nav/FreeShipping"
import { Outlet } from "react-router-dom"
import NavModal from "./Nav/NavModal"
import SignIn from "./account/SignIn"


const Root = () => {
    const [navModal, setNavModal] = useState(false)
     
    
    const showNavModal = ()=> {
        setNavModal(true)
    }
    const hideNavModal = ()=> {
        setNavModal(false)
    }
    const [showGoogle, setShowGoogle] = useState(false)
    const showGoogleHandler = ()=>{
      setShowGoogle(true)
    }
    
    const hideGoogleHandler = ()=>{
      setShowGoogle(false)
    }

    
    
    
    
    
   
  return (
    <Fragment> 
       <SignIn showGoogle={showGoogle}  hideGoogle={hideGoogleHandler} />
         <NavModal modal={navModal} nav={hideNavModal} />
    <NavItems  nav={showNavModal} showGoogle={showGoogleHandler}  />
     <FreeShipping/>
     <Outlet/>
    </Fragment>
  )
}

export default Root