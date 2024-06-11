import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/dist";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full">
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          href="/#hot"
          onClick={() => {
            setActiveTab(0);
          }}
          className={`tab font-bold text-lg ${activeTab === 0 && "tab-active"}`}
        >
          🔥 Hot
        </a>
        <a
          role="tab"
          href="/#new"
          onClick={() => {
            setActiveTab(1);
          }}
          className={`tab font-bold text-lg ${activeTab === 1 && "tab-active"}`}
        >
          ⭐ New
        </a>
        <a
          role="tab"
          href="/#top"
          onClick={() => {
            setActiveTab(2);
          }}
          className={`tab font-bold text-lg ${activeTab === 2 && "tab-active"}`}
        >
          🏆 Top
        </a>
      </div>
    </div>
  );
};

export default Tabs;
