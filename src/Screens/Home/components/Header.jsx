import React from "react";
import { ClipboardPlus } from "lucide-react";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="flex justify-center gap-24 items-center">
        <button
          onClick={() => {
            navigation("/new");
          }}
          className="btn btn-primary btn-sm md:btn-md"
        >
          <ClipboardPlus size={20} />
          New Idea
        </button>

        <h2 className="sm:text-3xl md:text-4xl text-nowrap font-bold tracking-wide">
          🔥 This Week's Top 20 Ideas
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="input input-md input-bordered input-primary max-w-xs"
        />
      </div>
    </>
  );
};

export default Header;
