'use client'
import React, {useState} from "react";
import Link from "next/link";
import Logo from "../../../public/logo.jpg";
import disableScroll from "disable-scroll"


// import Button from "./Button";

const Navbar = () => {
  const [MobileNavVisible, setMobileNavVisible] = useState(false); 

  if (MobileNavVisible) {
    disableScroll.on()
  } else {
    disableScroll.off()
  }

  return (
    <>
      <div className="w-full h-24 bg-white 800 sticky top-0 z-50">
        <div className="mx-auto px-4 h-full w-full">
          <div className="relative flex items-center justify-center md:justify-auto h-full w-full">
            <div className="absolute left-0 md:hidden" onClick={() => setMobileNavVisible(!MobileNavVisible)}>
              <div className={"h-1 w-8 bg-blue-darkest mb-2 mt-2 rounded-md transition-all" + (MobileNavVisible ? " translate-y-3 rotate-45" : "")}></div>
              <div className={"h-1 w-8 bg-blue-darkest mb-2 mt-2 rounded-md transition-all" + (MobileNavVisible ? " opacity-0" : "")}></div>
              <div className={"h-1 w-8 bg-blue-darkest mb-2 mt-2 rounded-md transition-all" + (MobileNavVisible ? " -translate-y-3 -rotate-45" : "")}></div>
            </div>
            <div className="md:flex-grow md:content-start">
              <Link href="/">
                <img className="h-16" src={Logo.src}></img>
              </Link>   
            </div>
            <ul className="hidden md:flex gap-x-16 text-white">
              <li>
                <Link href="/plans">
                  <p className="text-blue-darkest">Plans & Pricing</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-blue-darkest">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="text-blue-darkest">Contact</p>
                </Link>
              </li>
            </ul>
            <a className="hidden md:visible" href="mailto:info@personalonlineswimcoach.com">
              <div className="bg-blue-primary text-white text-xl rounded-md p-2 px-4 ml-16">
                Sign up
              </div>
            </a>
          </div>
        </div>
      </div>
      {MobileNavVisible && <div>
        <ul className="absolute z-50 bg-white h-full w-full text-center gap-x-16 ">
          <li className="text-lg h-16 border-b-2 p-4 mx-4">
            <Link href="/" onClick={() => setMobileNavVisible(false)}>
                <p className="text-blue-darkest">Home</p>
            </Link>
          </li>
          <li className="text-lg h-16 border-b-2 p-4 mx-4">
            <Link href="/plans" onClick={() => setMobileNavVisible(false)}>
              <p className="text-blue-darkest">Plans & Pricing</p>
            </Link>
          </li>
          <li className="text-lg h-16 border-b-2 p-4 mx-4">
            <Link href="/about" onClick={() => setMobileNavVisible(false)}>
              <p className="text-blue-darkest">About</p>
            </Link>
          </li>
          <li className="text-lg h-16 p-4 mx-4">
            <Link href="/contact" onClick={() => setMobileNavVisible(false)}>
              <p className="text-blue-darkest">Contact</p>
            </Link>
          </li>
        </ul>
      </div>}
    </>
  );
};

export default Navbar;