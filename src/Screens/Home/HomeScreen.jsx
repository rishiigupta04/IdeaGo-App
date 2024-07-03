import React, { Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { useLocation } from "react-router-dom/dist";
import { db } from "../../../utils/drizzle";
import { Ideas } from "../../../utils/schema";
import { desc } from "drizzle-orm";
import IdeaList from "./components/IdeaList";
import { ClipboardPlus } from "lucide-react";
import { useNavigate } from "react-router-dom/dist";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const HomeScreen = () => {
  const navigation = useNavigate();
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
      <Suspense fallback={<Loading />}>
        <IdeaList ideaList={ideaList} refreshData={getAllIdeas} />
      </Suspense>
      {/* <div className="flex w-100 justify-center py-3  ">
        <button
          onClick={() => {
            navigation("/new");
          }}
          className="btn btn-primary btn-sm sm:btn-md"
        >
          <ClipboardPlus size={20} />
          New Idea
        </button>
      </div> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
