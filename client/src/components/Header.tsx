import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-3 text-white border-b border-white/20 items-center">
      <p className="text-2xl font-bold ">DrawKit</p>
      <div className="flex gap-3">
        {" "}
        <Link to={"/login"}>
        <div className="bg-[#a8a5ff] text-black py-2 px-3 rounded">Get Started</div>
        </Link>
         <Link to={"/register"}>
        <div className="py-2 px-3 border rounded border-[#a8a5ff] text-[#a8a5ff] ">Login</div></Link>
      </div>
    </header>
  );
}

export default Header;
