import React from "react";
import Link from "next/link";
import Logo from "../../../public/logo2.jpg";
import "./contactbar.css";

const ContactBar = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-blue-darkest flex flex-row p-16 text-white wave mt-8">
        <div className="w-1/3 z-10">
          <p className="text-5xl font-bold ml-8 mt-8">POSC logo</p>
        </div>
        <div className="w-1/3 z-10">
          <p className="text-3xl pb-4">Company</p>
          <p className="text-xl">Terms & conditions</p>
          <p className="text-xl">Privacy policy</p>
        </div>
        <div className="w-1/3 z-10">
          <p className="text-3xl pb-4">Contact us</p>
          <p className="text-xl">example@online-swim-coach.nl</p>
          <p className="text-xl">Hier komen de socials</p>
        </div>
      </div>
      <p className="bg-blue-darkest w-full text-center text-white">Copyright @ 2024 Personal Online Swim Coach. All Rights reserved.</p>
    </div>
  );
};

export default ContactBar;