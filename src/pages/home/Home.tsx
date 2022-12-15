import React from "react";
import Expenselist from "../../components/expense-list/Expenselist";
import Topfold from "../../components/topfold/Topfold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div>
        <Topfold />
        <Expenselist />
      </div>
    </div>
  );
};

export default Home;
