import React, { useState } from "react";
import { db } from "./../../../../utils/drizzle";
import { Ideas } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import {
  checkIfAlreadyDownVoted,
  checkIfAlreadyVoted,
  downVote,
  upVote,
} from "../../../Service";

const IdeaItem = ({ idea, index, refreshData }) => {
  const upvoteHandler = async () => {
    if (upVote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote + 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  const downvoteHandler = async () => {
    if (downVote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote - 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  return (
    <div className="my-5 mb-3 border rounded-lg p-5 shadow-lg font-semibold opacity-80">
      <div className=" flex gap-10">
        <h2 className="w-[95%] flex gap-2 text-lg">
          <span>{index + 1}. </span>
          {idea?.content}
        </h2>
        <div className=" flex flex-col justify-center items-center text-center text-xl gap-2">
          <h2
            onClick={() => upvoteHandler()}
            className={`hover:scale-125 transition-all cursor-pointer rounded-2xl p-1
              ${checkIfAlreadyVoted(idea.id) && "bg-[#7480FF]"} `}
          >
            🔥
          </h2>
          <h2>{idea?.vote}</h2>
          <h2
            onClick={() => downvoteHandler()}
            className={`hover:scale-125 transition-all cursor-pointer rounded-2xl p-1
              ${checkIfAlreadyDownVoted(idea.id) && "bg-[#7480FF]"} `}
          >
            👎
          </h2>
        </div>
      </div>
      <h2 className="font-thin tracking-tightest text-sm opacity-70 flex gap-6">
        <span></span>
        By {idea?.username} on {idea?.createdAt}
      </h2>
    </div>
  );
};

export default IdeaItem;
