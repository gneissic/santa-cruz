import { Fragment } from "react";
import FooterItems from "./FooterItems";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Fragment>
      <div className="mt-[3rem]">
        <div className="lg:flex justify-around ">
        <FooterItems
        head="COMPANY"
        about="About Us"
        steward="StewardShip"
        pay="PayDirt"
        careers="Careers"
        privacy="Privacy Policy"
        policy="Cookie Policy"
        contact="Contact Us"
      />
      <FooterItems
        head="TECHNOLOGY"
        about="Lifetime Guarantee"
        steward="Carbon Expertise"
        pay="VPP Technology"
      />
      <FooterItems
        head="SUPPORT"
        about="Product Recall"
        steward="Bike Registration"
        pay="Warranty & Replacements"
        careers="Bike Archive"
        privacy="Shop Parts & Tools"
        policy="Tech Support"
        contact=" Frequently Asked Questions"
        us="Start A Webstore Return"
      />
      <FooterItems
        head="EXPERIENCE"
        about="News"
        steward="Events"
        pay="Find a Retailer"
        careers="Factory Demo"
        privacy="Demo Tour"
        policy="Morzine Showroom"
      />
        </div>
      
      <div className="lg:flex justify-between lg:border-t lg:mt-5 lg:text-lg mx-3 py-5">
      <div className="grid place-items-center gap-2 border-t lg:border-none pt-[1rem] mt-[2rem]">
        <h1>Follow us </h1>
        <div className="flex gap-3">
<AiFillGithub/>
        <AiOutlineTwitter/>
        </div>
        
      </div>
      <p className="text-xs text-center pt-[3rem] pb-3 ">@ 2023 Santa Cruz Bicyles. All Rights Reserved</p>
 
      </div>
           </div>
    </Fragment>
  );
};

export default Footer;
