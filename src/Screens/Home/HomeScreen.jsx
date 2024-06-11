import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { useLocation } from "react-router-dom/dist";
import { db } from "../../../utils/drizzle";
import { Ideas } from "../../../utils/schema";
import { desc } from "drizzle-orm";
import IdeaList from "./components/IdeaList";
import NewIdeaBtn from "./components/NewIdeaBtn";

const HomeScreen = () => {
  const params = useLocation();
  const [ideaList, setIdeaList] = useState([]);

  useEffect(() => {
    getAllIdeas();
  }, [params]);

  const getAllIdeas = async () => {
    const result = await db
      .select()
      .from(Ideas)
      .orderBy(
        desc(
          params.hash === "#hot" || params.hash === "#top"
            ? Ideas.vote
            : Ideas.id
        )
      )
      .limit(20);
    // console.log(result);

    setIdeaList(result);
  };
  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={getAllIdeas} />
      <div className="flex w-100 justify-center py-3  ">
        <NewIdeaBtn />
      </div>
    </div>
  );
};

export default HomeScreen;
