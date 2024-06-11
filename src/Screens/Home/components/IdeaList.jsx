import React from "react";
import IdeaItem from "./IdeaItem";

const IdeaList = ({ ideaList, refreshData }) => {
  return (
    <>
      {ideaList.map((idea, index) => (
        <IdeaItem
          idea={idea}
          key={index}
          index={index}
          refreshData={refreshData}
        />
      ))}
    </>
  );
};

export default IdeaList;
