import React from "react";
import Link from "next/link";
import Logo from "../../../public/logo.jpg";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-white 800 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            <div className="flex-grow">
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
            <div className="bg-blue-primary text-white text-xl rounded-md p-2 px-4 ml-16">
                Sign up
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;