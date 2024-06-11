import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="my-16 flex flex-col items-center gap-5">
      <h2 className="font-thin text-2xl text-center">
        Top 20 Productive Ideas for your next startup.
      </h2>
      <h2 className="text-center text-lg tracking-widest">
        <strong className="text-secondary">Like your favourite ideas.</strong>{" "}
        Write your best ideas, No account needed!
      </h2>
      <div className="mt-6">
        <select
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select Theme
          </option>
          <option>light</option>
          <option>cyberpunk</option>
          <option>synthwave</option>
          <option>halloween</option>
          <option>luxury</option>
          <option>night</option>
          <option>dim</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
