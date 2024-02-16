import React, { useState } from "react";
import "./portfolio.css";
import Company from "./company";
import PortfolioProfessional from "./professionWork";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="container container1">
        <div className="tabs">
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? "btn btn-primary" : "btn"}
          >
            Company
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? "btn btn-primary" : "btn"}
          >
            Personal
          </button>
          <button
            onClick={() => handleTabClick("tab3")}
            className={activeTab === "tab3" ? "btn btn-primary" : "btn"}
          >
            Freelance
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && <PortfolioProfessional />}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTabs;
