import React from "react";
import Expenselist from "../../components/expense-list/Expenselist";
import Topfold from "../../components/topfold/Topfold";
import TotalExpense from "../toalExpense/TotalExpense";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div>
        <Topfold />
        <TotalExpense />
        <Expenselist />
      </div>
    </div>
  );
};

export default Home;
