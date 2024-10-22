import React from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <>
      <div className="navbar-sticky z-30 justify-between items-center xl:px-36 md:px-10 py-4 bg-white shadow-md">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#069A8E]">
          Sayang<span className="text-[#FFDC7F]">Beta</span>
        </Link>
      </div>
    </>
  );
};

export default HeaderAuth;
