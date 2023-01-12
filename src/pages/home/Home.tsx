import { Box } from "@chakra-ui/react";
import React from "react";
import Expenselist from "../../components/expense-list/Expenselist";
import Footer from "../../components/footer/Footer";
import Topfold from "../../components/topfold/Topfold";
import TotalExpense from "../toalExpense/TotalExpense";
import "./home.css";
const Home = () => {
  return (
    <Box className="home">
      <Box>
        <Topfold />
        <TotalExpense />
        <Expenselist />



      </Box>
    </Box>
  );
};

export default Home;
