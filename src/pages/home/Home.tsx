import { Box } from "@chakra-ui/react";
import Expenselist from "../../components/expense-list/Expenselist";
import TotalExpense from "../toalExpense/TotalExpense";

const Home = () => {
  return (
    <Box>
      <TotalExpense />
      <Expenselist />
    </Box>
  );
};

export default Home;
