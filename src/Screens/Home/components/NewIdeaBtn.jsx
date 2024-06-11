import React from "react";
import { ClipboardPlus } from "lucide-react";
const NewIdeaBtn = () => {
  return (
    <div>
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
  );
};

export default NewIdeaBtn;
