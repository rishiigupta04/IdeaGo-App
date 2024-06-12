import React from "react";

import { ClipboardPlus } from "lucide-react";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="flex justify-center gap-6 lg:gap-24  items-center">
        <div>
          <img src="/favicon.png" className="md:w-16 w-10" alt="logo" />
        </div>
        <h2 className="text-2xl lg:text-5xl text-nowrap font-bold tracking-wide">
          Top 20 Ideas
        </h2>
        <button
          onClick={() => {
            navigation("/new");
          }}
          className="btn btn-primary btn-sm sm:btn-md"
        >
          <ClipboardPlus size={20} />
          New Idea
        </button>
      </div>
    </>
  );
};

export default Header;
